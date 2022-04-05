/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict'

import { TransactionReceipt } from '@ethersproject/providers'
import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from '@ethersproject/abstract-signer'
import { ContractTransaction } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'
import { keccak256 } from '@ethersproject/keccak256'
import { concat, zeroPad } from '@ethersproject/bytes'

import { ArbRetryableTx__factory } from '../abi/factories/ArbRetryableTx__factory'
import { ARB_RETRYABLE_TX_ADDRESS } from '../dataEntities/constants'
import {
  SignerProviderUtils,
  SignerOrProvider,
} from '../dataEntities/signerOrProvider'
import { ArbTsError } from '../dataEntities/errors'
import { ethers, Overrides } from 'ethers'
import { Address } from '../dataEntities/address'
import { L2TransactionReceipt } from './L2Transaction'
import { hexDataSlice, defaultAbiCoder } from 'ethers/lib/utils'

export enum L2TxnType {
  L2_TX = 0,
  AUTO_REDEEM = 1,
}

export enum L1ToL2MessageStatus {
  /**
   * The retryable ticket has yet to be created
   */
  NOT_YET_CREATED = 1,
  /**
   * An attempt was made to create the retryable ticket, but it failed.
   * This could be due to not enough submission cost being paid by the L1 transaction
   */
  CREATION_FAILED = 2,
  /**
   * The retryable ticket has been created but has not been redeemed. This could be due to the
   * auto redeem failing, or if the params (max l2 gas price) * (max l2 gas) = 0 then no auto
   * redeem tx is ever issued. An auto redeem is also never issued for ETH deposits.
   * A manual redeem is now required.
   */
  FUNDS_DEPOSITED_ON_L2 = 3,
  /**
   * The retryable ticket has been redeemed (either by auto, or manually) and the
   * l2 transaction has been executed
   */
  REDEEMED = 4,
  /**
   * The message has either expired or has been canceled. It can no longer be redeemed.
   */
  EXPIRED = 5,
}

export interface L1toL2MessageInputs {
  /**
   * Destination address for L2 message
   */
  destinationAddress: string
  /**
   * Call value in L2 message
   */
  l2CallValue: BigNumber
  /**
   * Max gas deducted from L2 balance to cover base submission fee
   */
  maxSubmissionCost: BigNumber
  /**
   * L2 address address to credit (maxgas x gasprice - execution cost)
   */
  excessFeeRefundAddress: string
  /**
   *  Address to credit l2Callvalue on L2 if retryable txn times out or gets cancelled
   */
  callValueRefundAddress: string
  /**
   * Max gas deducted from user's L2 balance to cover L2 execution
   */
  maxGas: BigNumber
  /**
   * Gas price bid for L2 execution
   */
  gasPriceBid: BigNumber
  /**
   * Length in bytes calldata of L2 message
   */
  callDataLength: BigNumber
}

/**
 * Conditional type for Signer or Provider. If T is of type Provider
 * then L1ToL2MessageReaderOrWriter<T> will be of type L1ToL2MessageReader.
 * If T is of type Signer then L1ToL2MessageReaderOrWriter<T> will be of
 * type L1ToL2MessageWriter.
 */
export type L1ToL2MessageReaderOrWriter<
  T extends SignerOrProvider
> = T extends Provider ? L1ToL2MessageReader : L1ToL2MessageWriter

export class L1ToL2Message {
  /**
   * When messages are sent from L1 to L2 a retryable ticket is created on L2.
   * The retryableCreationId can be used to retrieve information about the success or failure of the
   * creation of the retryable ticket.
   */
  public readonly retryableCreationId: string

  private static calculateL2DerivedHash(
    retryableCreationId: string,
    l2TxnType: L2TxnType
  ): string {
    return keccak256(
      concat([
        zeroPad(retryableCreationId, 32),
        zeroPad(BigNumber.from(l2TxnType).toHexString(), 32),
      ])
    )
  }

  /**
   * The submit retryable transactions use the typed transaction envelope 2718.
   * The id of these transactions is the hash of the RLP encoded transaction.
   * @param l2ChainId
   * @param fromAddress
   * @param messageNumber
   * @param l1BaseFee
   * @param destAddress
   * @param l2CallValue
   * @param l1Value
   * @param maxSubmissionCost
   * @param excessFeeRefundAddress
   * @param callValueRefundAddress
   * @param maxGas
   * @param gasPriceBid
   * @param data
   * @returns
   */
  public static calculateSubmitRetryableId(
    l2ChainId: BigNumber,
    fromAddress: string,
    messageNumber: BigNumber,
    l1BaseFee: BigNumber,

    destAddress: string,
    l2CallValue: BigNumber,
    l1Value: BigNumber,
    maxSubmissionCost: BigNumber,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    maxGas: BigNumber,
    gasPriceBid: BigNumber,
    data: string
  ): string {
    const formatNumber = (value: BigNumber): Uint8Array => {
      return ethers.utils.stripZeros(value.toHexString())
    }

    const addressAlias = new Address(fromAddress)

    const from = addressAlias.applyAlias()
    const chainId = BigNumber.from(l2ChainId)
    const msgNum = BigNumber.from(messageNumber)

    const fields: any[] = [
      formatNumber(chainId),
      zeroPad(formatNumber(msgNum), 32),
      from.toString(),
      formatNumber(l1BaseFee),

      formatNumber(l1Value),
      formatNumber(gasPriceBid),
      formatNumber(maxGas),
      destAddress,
      formatNumber(l2CallValue),
      callValueRefundAddress,
      formatNumber(maxSubmissionCost),
      excessFeeRefundAddress,
      data,
    ]

    // arbitrum submit retry transactions have type 0x69
    const rlpEnc = ethers.utils.hexConcat([
      '0x69',
      ethers.utils.RLP.encode(fields),
    ])

    return ethers.utils.keccak256(rlpEnc)
  }

  public static fromRetryableCreationId<T extends SignerOrProvider>(
    l2SignerOrProvider: T,
    retryableCreationId: string,
    messageNumber: BigNumber
  ): L1ToL2MessageReaderOrWriter<T>
  public static fromRetryableCreationId<T extends SignerOrProvider>(
    l2SignerOrProvider: T,
    retryableCreationId: string,
    messageNumber: BigNumber
  ): L1ToL2MessageReader | L1ToL2MessageWriter {
    return SignerProviderUtils.isSigner(l2SignerOrProvider)
      ? new L1ToL2MessageWriter(
          l2SignerOrProvider,
          retryableCreationId,
          messageNumber
        )
      : new L1ToL2MessageReader(
          l2SignerOrProvider,
          retryableCreationId,
          messageNumber
        )
  }

  public constructor(
    retryableCreationId: string,
    public readonly messageNumber: BigNumber
  ) {
    this.retryableCreationId = retryableCreationId
  }
}

/**
 * If the status is redeemed an l2TxReceipt is populated.
 * For all other statuses l2TxReceipt is not populated
 */
export type L1ToL2MessageWaitResult =
  | { status: L1ToL2MessageStatus.REDEEMED; l2TxReceipt: TransactionReceipt }
  | { status: Exclude<L1ToL2MessageStatus, L1ToL2MessageStatus.REDEEMED> }

export class L1ToL2MessageReader extends L1ToL2Message {
  public constructor(
    public readonly l2Provider: Provider,
    retryableCreationId: string,
    messageNumber: BigNumber
  ) {
    super(retryableCreationId, messageNumber)
  }

  /**
   * Try to get the receipt for the retryable ticket. See L1ToL2Message.retryableCreationId
   * May throw an error if retryable ticket has yet to be created
   * @returns
   */
  public getRetryableCreationReceipt(): Promise<TransactionReceipt> {
    return this.l2Provider.getTransactionReceipt(this.retryableCreationId)
  }

  // CHRIS: TODO: update these docs
  /**
   * Receipt for the l2 transaction created by this message. See L1ToL2Message.l2TxHash
   * May throw an error if the l2 transaction has yet to be executed, which is the case if
   * the retryable ticket has not been created and redeemed.
   * @returns
   */
  public async getFirstRedeemAttempt(): Promise<TransactionReceipt | null> {
    return await this.getFirstRedeem()
  }

  // CHRIS: TODO: read ALL the comments in arbitrum sdk and check for accuracy with nitro

  private async getFirstRedeem(
    retryableCreationReceipt?: TransactionReceipt
  ): Promise<TransactionReceipt | null> {
    const creationReceipt =
      retryableCreationReceipt ||
      (await this.l2Provider.getTransactionReceipt(this.retryableCreationId))

    if (creationReceipt) {
      const l2Receipt = new L2TransactionReceipt(creationReceipt)
      const redeemEvents = l2Receipt.getRedeemScheduledEvents()
      if (redeemEvents.length === 1) {
        // CHRIS: TODO: this seems weird that we should only return if there was one redeem event?
        // CHRIS: TODO: throw an error if this is unexpected
        return await this.l2Provider.getTransactionReceipt(
          redeemEvents[0].retryTxHash
        )
      }
    }

    return null
  }

  /**
   * Has this message expired. Once expired the retryable ticket can no longer be redeemed.
   * @returns
   */
  public async isExpired(): Promise<boolean> {
    const currentTimestamp = BigNumber.from(
      (await this.l2Provider.getBlock('latest')).timestamp
    )
    const timeoutTimestamp = await this.getTimeout()

    // timeoutTimestamp returns the timestamp at which the retryable ticket expires
    // it can also return 0 if the ticket l2Tx does not exist
    return currentTimestamp.gte(timeoutTimestamp)
  }
  
  /**
   * Parse the calldata of the retryable transaction associated with this L1ToL2Message
   */
  public async getInputs(): Promise<L1toL2MessageInputs> {
    const txData = (
      await this.l2Provider.getTransaction(this.retryableCreationId)
    ).data
    // Ignore first 4 bytes: message ID
    const inputsData = hexDataSlice(txData, 4)
    const [
      destinationAddress,
      l2CallValue,
      maxSubmissionCost,
      excessFeeRefundAddress,
      callValueRefundAddress,
      maxGas,
      gasPriceBid,
      _sizeOfCallDataLength, //** Specifies encoding for dynamic length arrays */
      callDataLength,
    ] = defaultAbiCoder.decode(
      [
        'address',
        'uint256',
        'uint256',
        'address',
        'address',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
      ],
      inputsData
    )
    // sanity check
    if (_sizeOfCallDataLength.toNumber() !== 256)
      throw new ArbTsError(
        `Error getting Msg inputs data; unrecognized encoding. Execpeted ${_sizeOfCallDataLength.toNumber()} to be 256 `
      )
    return {
      destinationAddress,
      l2CallValue,
      maxSubmissionCost,
      excessFeeRefundAddress,
      callValueRefundAddress,
      maxGas,
      gasPriceBid,
      callDataLength,
    }
  }

  protected async receiptsToStatus(
    retryableCreationReceipt: TransactionReceipt | null | undefined,
    l2TxReceipt: TransactionReceipt | null | undefined
  ): Promise<L1ToL2MessageStatus> {
    // happy path for non auto redeemable messages
    // NOT_YET_CREATED -> FUNDS_DEPOSITED
    // these will later either transition to EXPIRED after the timeout
    // (this is what happens to eth deposits since they don't need to be
    // redeemed) or to REDEEMED if the retryable is manually redeemed

    // happy path for auto redeemable messages
    // NOT_YET_CREATED -> FUNDS_DEPOSITED -> REDEEMED
    // an attempt to auto redeem executable messages is made immediately
    // after the retryable is created - which if successful will transition
    // the status to REDEEMED. If the auto redeem fails then the ticket
    // will transition to REDEEMED if manually redeemed, or EXPIRE
    // after the timeout is reached and the ticket is not redeemed

    // we test the retryable receipt first as if this doesnt exist there's
    // no point looking to see if expired
    if (!retryableCreationReceipt) {
      return L1ToL2MessageStatus.NOT_YET_CREATED
    }
    if (retryableCreationReceipt.status === 0) {
      return L1ToL2MessageStatus.CREATION_FAILED
    }

    // ticket created, has it been redeemed?
    if (l2TxReceipt && l2TxReceipt.status === 1) {
      return L1ToL2MessageStatus.REDEEMED
    }

    // CHRIS: TODO:
    // 1. we create a ticket with too low
    // 2. then we redeem it
    // 3. that means the ticket no longer exists, so a call to isExpired will fail
    // 4. was the result successful? we know that based on the waitresult?

    // not redeemed, has it now expired
    if (await this.isExpired()) {
      return L1ToL2MessageStatus.EXPIRED
    }

    // ticket was created but not redeemed
    // this could be because
    // a) the ticket is non auto redeemable (l2GasPrice == 0 || l2GasLimit == 0) -
    //    this is usually an eth deposit. But in some rare case the
    //    user may still want to manually redeem it
    // b) the ticket is auto redeemable, but the auto redeem failed

    // the fact that the auto redeem failed isn't usually useful to the user
    // if they're doing an eth deposit they don't care about redemption
    // and if they do want execution to occur they will know that they're
    // here because the auto redeem failed. If they really want to check
    // they can fetch the auto redeem receipt and check the status on it
    return L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2
  }

  public async status(): Promise<L1ToL2MessageStatus> {
    return this.receiptsToStatus(
      await this.getRetryableCreationReceipt(),
      await this.getFirstRedeem()
    )
  }

  // 1. so we can redeem, we can see a new item scheduled, but we cant see the scheduled item actually get run
  // 2. put some logging in for all retry transactions - done

  /**
   * Wait for the retryable ticket to be created, for it to be redeemed, and for the l2Tx to be executed.
   * Note: The terminal status of a transaction that only does an eth deposit is FUNDS_DEPOSITED_ON_L2 as
   * no L2 transaction needs to be executed, however the terminal state of any other transaction is REDEEMED
   * which represents that the retryable ticket has been redeemed and the L2 tx has been executed.
   * @param confirmations Amount of confirmations the retryable ticket and the auto redeem receipt should have
   * @param timeout Amount of time to wait for the retryable ticket to be created
   * Defaults to 15 minutes, as by this time all transactions are expected to be included on L2. Throws on timeout.
   * @returns The wait result contains a status, and optionally the l2TxReceipt.
   * If the status is "REDEEMED" then a l2TxReceipt is also available on the result.
   * If the status has any other value then l2TxReceipt is not populated.
   */
  public async waitForStatus(
    confirmations?: number,
    timeout = 900000
  ): Promise<L1ToL2MessageWaitResult> {
    // try to wait for the retryable ticket to be created
    let retryableCreationReceipt: TransactionReceipt | undefined
    try {
      retryableCreationReceipt = await this.l2Provider.waitForTransaction(
        this.retryableCreationId,
        confirmations,
        timeout
      )
    } catch (err) {
      if ((err as Error).message.includes('timeout exceeded')) {
        // do nothing - this is dependent on the timeout passed in
      } else throw err
    }

    // 1. we;re getting the original submit retryable
    // 2. then we want to find all calls to redeem right? and return the last one
    const l2TxReceipt =
      (await this.getFirstRedeem(retryableCreationReceipt)) || undefined

    const status = await this.receiptsToStatus(
      retryableCreationReceipt,
      l2TxReceipt
    )

    if (status === L1ToL2MessageStatus.REDEEMED) {
      return {
        // if the status is redeemed we know the l2TxReceipt must exist
        l2TxReceipt: l2TxReceipt!,
        status,
      }
    } else {
      return {
        status,
      }
    }
  }

  /**
   * How long until this message expires
   * @returns
   */
  public async getTimeout(): Promise<BigNumber> {
    const arbRetryableTx = ArbRetryableTx__factory.connect(
      ARB_RETRYABLE_TX_ADDRESS,
      this.l2Provider
    )
    return await arbRetryableTx.getTimeout(this.retryableCreationId)
  }

  /**
   * Address to which CallValue will be credited to on L2 if the retryable ticket times out or is cancelled.
   * The Beneficiary is also the address with the right to cancel a Retryable Ticket (if the ticket hasn’t been redeemed yet).
   * @returns
   */
  public getBeneficiary(): Promise<string> {
    const arbRetryableTx = ArbRetryableTx__factory.connect(
      ARB_RETRYABLE_TX_ADDRESS,
      this.l2Provider
    )
    return arbRetryableTx.getBeneficiary(this.retryableCreationId)
  }
}

export class L1ToL2MessageWriter extends L1ToL2MessageReader {
  public constructor(
    public readonly l2Signer: Signer,
    retryableCreationId: string,
    messageNumber: BigNumber
  ) {
    super(l2Signer.provider!, retryableCreationId, messageNumber)
    if (!l2Signer.provider) throw new Error('Signer not connected to provider.')
  }

  /**
   * Manually redeem the retryable ticket.
   * Throws if message status is not L1ToL2MessageStatus.NOT_YET_REDEEMED
   */
  public async redeem(overrides?: Overrides): Promise<ContractTransaction> {
    const status = await this.status()
    if (status === L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2) {
      const arbRetryableTx = ArbRetryableTx__factory.connect(
        ARB_RETRYABLE_TX_ADDRESS,
        this.l2Signer
      )
      const feeData = await this.l2Provider.getFeeData()

      // CHRIS: TODO: check what the default behaviour is for gasprice
      return await arbRetryableTx.redeem(this.retryableCreationId, {
        maxFeePerGas: feeData.maxFeePerGas!,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas!,
        ...overrides,
      })
    } else {
      throw new ArbTsError(
        `Cannot redeem. Message status: ${status} must be: ${L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2}.`
      )
    }
  }

  /**
   * Cancel the retryable ticket.
   * Throws if message status is not L1ToL2MessageStatus.NOT_YET_REDEEMED
   */
  public async cancel(overrides?: Overrides): Promise<ContractTransaction> {
    const status = await this.status()
    if (status === L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2) {
      const arbRetryableTx = ArbRetryableTx__factory.connect(
        ARB_RETRYABLE_TX_ADDRESS,
        this.l2Signer
      )
      return await arbRetryableTx.cancel(this.retryableCreationId, overrides)
    } else {
      throw new ArbTsError(
        `Cannot cancel. Message status: ${status} must be: ${L1ToL2MessageStatus.FUNDS_DEPOSITED_ON_L2}.`
      )
    }
  }
}

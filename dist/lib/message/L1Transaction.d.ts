import { TransactionReceipt } from '@ethersproject/providers';
import { Log, Provider } from '@ethersproject/abstract-provider';
import { ContractTransaction } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { L1ToL2MessageReaderOrWriter, L1ToL2MessageReaderClassic, L1ToL2MessageWaitResult, EthDepositMessage, EthDepositMessageWaitResult } from './L1ToL2Message';
import { SignerOrProvider } from '../dataEntities/signerOrProvider';
import { InboxMessageDeliveredEvent } from '../abi/Inbox';
import { MessageDeliveredEvent } from '../abi/Bridge';
import { EventArgs } from '../dataEntities/event';
export interface L1ContractTransaction<TReceipt extends L1TransactionReceipt = L1TransactionReceipt> extends ContractTransaction {
    wait(confirmations?: number): Promise<TReceipt>;
}
export type L1EthDepositTransaction = L1ContractTransaction<L1EthDepositTransactionReceipt>;
export type L1ContractCallTransaction = L1ContractTransaction<L1ContractCallTransactionReceipt>;
export declare class L1TransactionReceipt implements TransactionReceipt {
    readonly to: string;
    readonly from: string;
    readonly contractAddress: string;
    readonly transactionIndex: number;
    readonly root?: string;
    readonly gasUsed: BigNumber;
    readonly logsBloom: string;
    readonly blockHash: string;
    readonly transactionHash: string;
    readonly logs: Array<Log>;
    readonly blockNumber: number;
    readonly confirmations: number;
    readonly cumulativeGasUsed: BigNumber;
    readonly effectiveGasPrice: BigNumber;
    readonly byzantium: boolean;
    readonly type: number;
    readonly status?: number;
    constructor(tx: TransactionReceipt);
    /**
     * Check if is a classic transaction
     * @param l2SignerOrProvider
     */
    isClassic<T extends SignerOrProvider>(l2SignerOrProvider: T): Promise<boolean>;
    /**
     * Get any MessageDelivered events that were emitted during this transaction
     * @returns
     */
    getMessageDeliveredEvents(): EventArgs<MessageDeliveredEvent>[];
    /**
     * Get any InboxMessageDelivered events that were emitted during this transaction
     * @returns
     */
    getInboxMessageDeliveredEvents(): {
        messageNum: BigNumber;
        data: string;
    }[];
    /**
     * Get combined data for any InboxMessageDelivered and MessageDelivered events
     * emitted during this transaction
     * @returns
     */
    getMessageEvents(): {
        inboxMessageEvent: EventArgs<InboxMessageDeliveredEvent>;
        bridgeMessageEvent: EventArgs<MessageDeliveredEvent>;
    }[];
    /**
     * Get any eth deposit messages created by this transaction
     * @param l2SignerOrProvider
     */
    getEthDeposits(l2Provider: Provider): Promise<EthDepositMessage[]>;
    /**
     * Get classic l1tol2 messages created by this transaction
     * @param l2Provider
     */
    getL1ToL2MessagesClassic(l2Provider: Provider): Promise<L1ToL2MessageReaderClassic[]>;
    /**
     * Get any l1tol2 messages created by this transaction
     * @param l2SignerOrProvider
     */
    getL1ToL2Messages<T extends SignerOrProvider>(l2SignerOrProvider: T): Promise<L1ToL2MessageReaderOrWriter<T>[]>;
    /**
     * Get any token deposit events created by this transaction
     * @returns
     */
    getTokenDepositEvents(): {
        l1Token: string;
        _from: string;
        _to: string;
        _sequenceNumber: BigNumber;
        _amount: BigNumber;
    }[];
    /**
     * Replaces the wait function with one that returns an L1TransactionReceipt
     * @param contractTransaction
     * @returns
     */
    static monkeyPatchWait: (contractTransaction: ContractTransaction) => L1ContractTransaction;
    /**
     * Replaces the wait function with one that returns an L1EthDepositTransactionReceipt
     * @param contractTransaction
     * @returns
     */
    static monkeyPatchEthDepositWait: (contractTransaction: ContractTransaction) => L1EthDepositTransaction;
    /**
     * Replaces the wait function with one that returns an L1ContractCallTransactionReceipt
     * @param contractTransaction
     * @returns
     */
    static monkeyPatchContractCallWait: (contractTransaction: ContractTransaction) => L1ContractCallTransaction;
}
/**
 * An L1TransactionReceipt with additional functionality that only exists
 * if the transaction created a single eth deposit.
 */
export declare class L1EthDepositTransactionReceipt extends L1TransactionReceipt {
    /**
     * Wait for the funds to arrive on L2
     * @param confirmations Amount of confirmations the retryable ticket and the auto redeem receipt should have
     * @param timeout Amount of time to wait for the retryable ticket to be created
     * Defaults to 15 minutes, as by this time all transactions are expected to be included on L2. Throws on timeout.
     * @returns The wait result contains `complete`, a `status`, the L1ToL2Message and optionally the `l2TxReceipt`
     * If `complete` is true then this message is in the terminal state.
     * For eth deposits complete this is when the status is FUNDS_DEPOSITED, EXPIRED or REDEEMED.
     */
    waitForL2(l2Provider: Provider, confirmations?: number, timeout?: number): Promise<{
        complete: boolean;
        message: EthDepositMessage;
    } & EthDepositMessageWaitResult>;
}
/**
 * An L1TransactionReceipt with additional functionality that only exists
 * if the transaction created a single call to an L2 contract - this includes
 * token deposits.
 */
export declare class L1ContractCallTransactionReceipt extends L1TransactionReceipt {
    /**
     * Wait for the transaction to arrive and be executed on L2
     * @param confirmations Amount of confirmations the retryable ticket and the auto redeem receipt should have
     * @param timeout Amount of time to wait for the retryable ticket to be created
     * Defaults to 15 minutes, as by this time all transactions are expected to be included on L2. Throws on timeout.
     * @returns The wait result contains `complete`, a `status`, an L1ToL2Message and optionally the `l2TxReceipt`.
     * If `complete` is true then this message is in the terminal state.
     * For contract calls this is true only if the status is REDEEMED.
     */
    waitForL2<T extends SignerOrProvider>(l2SignerOrProvider: T, confirmations?: number, timeout?: number): Promise<{
        complete: boolean;
        message: L1ToL2MessageReaderOrWriter<T>;
    } & L1ToL2MessageWaitResult>;
}

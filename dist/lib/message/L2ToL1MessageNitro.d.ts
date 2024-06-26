import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { BlockTag } from '@ethersproject/abstract-provider';
import { L2ToL1TxEvent } from '../abi/ArbSys';
import { ContractTransaction, Overrides } from 'ethers';
import { SignerOrProvider } from '../dataEntities/signerOrProvider';
import { EventArgs } from '../dataEntities/event';
import { L2ToL1MessageStatus } from '../dataEntities/message';
/**
 * Conditional type for Signer or Provider. If T is of type Provider
 * then L2ToL1MessageReaderOrWriter<T> will be of type L2ToL1MessageReader.
 * If T is of type Signer then L2ToL1MessageReaderOrWriter<T> will be of
 * type L2ToL1MessageWriter.
 */
export type L2ToL1MessageReaderOrWriterNitro<T extends SignerOrProvider> = T extends Provider ? L2ToL1MessageReaderNitro : L2ToL1MessageWriterNitro;
/**
 * Base functionality for nitro L2->L1 messages
 */
export declare class L2ToL1MessageNitro {
    readonly event: EventArgs<L2ToL1TxEvent>;
    protected constructor(event: EventArgs<L2ToL1TxEvent>);
    /**
     * Instantiates a new `L2ToL1MessageWriterNitro` or `L2ToL1MessageReaderNitro` object.
     *
     * @param {SignerOrProvider} l1SignerOrProvider Signer or provider to be used for executing or reading the L2-to-L1 message.
     * @param {EventArgs<L2ToL1TxEvent>} event The event containing the data of the L2-to-L1 message.
     * @param {Provider} [l1Provider] Optional. Used to override the Provider which is attached to `l1SignerOrProvider` in case you need more control. This will be a required parameter in a future major version update.
     */
    static fromEvent<T extends SignerOrProvider>(l1SignerOrProvider: T, event: EventArgs<L2ToL1TxEvent>, l1Provider?: Provider): L2ToL1MessageReaderOrWriterNitro<T>;
    static getL2ToL1Events(l2Provider: Provider, filter: {
        fromBlock: BlockTag;
        toBlock: BlockTag;
    }, position?: BigNumber, destination?: string, hash?: BigNumber): Promise<(EventArgs<L2ToL1TxEvent> & {
        transactionHash: string;
    })[]>;
}
/**
 * Provides read-only access nitro for l2-to-l1-messages
 */
export declare class L2ToL1MessageReaderNitro extends L2ToL1MessageNitro {
    protected readonly l1Provider: Provider;
    protected sendRootHash?: string;
    protected sendRootSize?: BigNumber;
    protected sendRootConfirmed?: boolean;
    protected outboxAddress?: string;
    protected l1BatchNumber?: number;
    constructor(l1Provider: Provider, event: EventArgs<L2ToL1TxEvent>);
    getOutboxProof(l2Provider: Provider): Promise<string[]>;
    /**
     * Check if this message has already been executed in the Outbox
     */
    protected hasExecuted(l2Provider: Provider): Promise<boolean>;
    /**
     * Get the status of this message
     * In order to check if the message has been executed proof info must be provided.
     * @returns
     */
    status(l2Provider: Provider): Promise<L2ToL1MessageStatus>;
    private parseNodeCreatedAssertion;
    private getBlockFromNodeLog;
    private getBlockFromNodeNum;
    protected getBatchNumber(l2Provider: Provider): Promise<number | undefined>;
    protected getSendProps(l2Provider: Provider): Promise<{
        sendRootSize: BigNumber | undefined;
        sendRootHash: string | undefined;
        sendRootConfirmed: boolean | undefined;
    }>;
    /**
     * Waits until the outbox entry has been created, and will not return until it has been.
     * WARNING: Outbox entries are only created when the corresponding node is confirmed. Which
     * can take 1 week+, so waiting here could be a very long operation.
     * @param retryDelay
     * @returns outbox entry status (either executed or confirmed but not pending)
     */
    waitUntilReadyToExecute(l2Provider: Provider, retryDelay?: number): Promise<L2ToL1MessageStatus.EXECUTED | L2ToL1MessageStatus.CONFIRMED>;
    /**
     * Estimates the L1 block number in which this L2 to L1 tx will be available for execution.
     * If the message can or already has been executed, this returns null
     * @param l2Provider
     * @returns expected L1 block number where the L2 to L1 message will be executable. Returns null if the message can be or already has been executed
     */
    getFirstExecutableBlock(l2Provider: Provider): Promise<BigNumber | null>;
}
/**
 * Provides read and write access for nitro l2-to-l1-messages
 */
export declare class L2ToL1MessageWriterNitro extends L2ToL1MessageReaderNitro {
    private readonly l1Signer;
    /**
     * Instantiates a new `L2ToL1MessageWriterNitro` object.
     *
     * @param {Signer} l1Signer The signer to be used for executing the L2-to-L1 message.
     * @param {EventArgs<L2ToL1TxEvent>} event The event containing the data of the L2-to-L1 message.
     * @param {Provider} [l1Provider] Optional. Used to override the Provider which is attached to `l1Signer` in case you need more control. This will be a required parameter in a future major version update.
     */
    constructor(l1Signer: Signer, event: EventArgs<L2ToL1TxEvent>, l1Provider?: Provider);
    /**
     * Executes the L2ToL1Message on L1.
     * Will throw an error if the outbox entry has not been created, which happens when the
     * corresponding assertion is confirmed.
     * @returns
     */
    execute(l2Provider: Provider, overrides?: Overrides): Promise<ContractTransaction>;
}

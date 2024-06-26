import { Provider } from '@ethersproject/abstract-provider';
import { TransactionReceipt, JsonRpcProvider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
export declare const wait: (ms: number) => Promise<void>;
export declare const getBaseFee: (provider: Provider) => Promise<BigNumber>;
/**
 * Waits for a transaction receipt if confirmations or timeout is provided
 * Otherwise tries to fetch straight away.
 * @param provider
 * @param txHash
 * @param confirmations
 * @param timeout
 * @returns
 */
export declare const getTransactionReceipt: (provider: Provider, txHash: string, confirmations?: number, timeout?: number) => Promise<TransactionReceipt | null>;
export declare const isDefined: <T>(val: T | null | undefined) => val is T;
export declare const isArbitrumChain: (provider: Provider) => Promise<boolean>;
type GetFirstBlockForL1BlockProps = {
    forL1Block: number;
    provider: JsonRpcProvider;
    allowGreater?: boolean;
    minL2Block?: number;
    maxL2Block?: number | 'latest';
};
/**
 * This function performs a binary search to find the first L2 block that corresponds to a given L1 block number.
 * The function returns a Promise that resolves to a number if a block is found, or undefined otherwise.
 *
 * @param {JsonRpcProvider} provider - The L2 provider to use for the search.
 * @param {number} forL1Block - The L1 block number to search for.
 * @param {boolean} [allowGreater=false] - Whether to allow the search to go past the specified `forL1Block`.
 * @param {number|string} minL2Block - The minimum L2 block number to start the search from. Cannot be below the network's `nitroGenesisBlock`.
 * @param {number|string} [maxL2Block='latest'] - The maximum L2 block number to end the search at. Can be a `number` or `'latest'`. `'latest'` is the current block.
 * @returns {Promise<number | undefined>} - A Promise that resolves to a number if a block is found, or undefined otherwise.
 */
export declare function getFirstBlockForL1Block({ provider, forL1Block, allowGreater, minL2Block, maxL2Block, }: GetFirstBlockForL1BlockProps): Promise<number | undefined>;
export declare const getBlockRangesForL1Block: (props: GetFirstBlockForL1BlockProps) => Promise<number[] | undefined[]>;
export {};

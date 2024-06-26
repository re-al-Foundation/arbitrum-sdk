import { Provider } from '@ethersproject/abstract-provider';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from 'ethers';
import { RetryableData } from '../dataEntities/retryableData';
import { L1ToL2TransactionRequest } from '../dataEntities/transactionRequest';
import { OmitTyped } from '../utils/types';
import { L1ToL2MessageGasParams, L1ToL2MessageNoGasParams } from './L1ToL2MessageCreator';
/**
 * An optional big number percentage increase
 */
export type PercentIncrease = {
    /**
     * If provided, will override the estimated base
     */
    base?: BigNumber;
    /**
     * How much to increase the base by. If not provided system defaults may be used.
     */
    percentIncrease?: BigNumber;
};
export interface GasOverrides {
    gasLimit?: PercentIncrease & {
        /**
         * Set a minimum max gas
         */
        min?: BigNumber;
    };
    maxSubmissionFee?: PercentIncrease;
    maxFeePerGas?: PercentIncrease;
    /**
     * funds deposited along with the retryable (ie the msg.value that called the inbox)
     */
    deposit?: Pick<PercentIncrease, 'base'>;
}
export declare class L1ToL2MessageGasEstimator {
    readonly l2Provider: Provider;
    constructor(l2Provider: Provider);
    private percentIncrease;
    private applySubmissionPriceDefaults;
    private applyMaxFeePerGasDefaults;
    private applyGasLimitDefaults;
    /**
     * Return the fee, in wei, of submitting a new retryable tx with a given calldata size.
     * @param l1Provider
     * @param l1BaseFee
     * @param callDataSize
     * @param options
     * @returns
     */
    estimateSubmissionFee(l1Provider: Provider, l1BaseFee: BigNumber, callDataSize: BigNumber | number, options?: PercentIncrease): Promise<L1ToL2MessageGasParams['maxSubmissionCost']>;
    /**
     * Estimate the amount of L2 gas required for putting the transaction in the L2 inbox, and executing it.
     * @param retryableData object containing retryable ticket data
     * @param senderDeposit we dont know how much gas the transaction will use when executing
     * so by default we supply a dummy amount of call value that will definately be more than we need
     * @returns
     */
    estimateRetryableTicketGasLimit({ from, to, l2CallValue: l2CallValue, excessFeeRefundAddress, callValueRefundAddress, data, }: L1ToL2MessageNoGasParams, senderDeposit?: BigNumber): Promise<L1ToL2MessageGasParams['gasLimit']>;
    /**
     * Provides an estimate for the L2 maxFeePerGas, adding some margin to allow for gas price variation
     * @param options
     * @returns
     */
    estimateMaxFeePerGas(options?: PercentIncrease): Promise<L1ToL2MessageGasParams['maxFeePerGas']>;
    /**
     * Checks if the estimate is valid when compared with a new one
     * @param estimates Original estimate
     * @param reEstimates Estimate to compare against
     * @returns
     */
    static isValid(estimates: L1ToL2MessageGasParams, reEstimates: L1ToL2MessageGasParams): Promise<boolean>;
    /**
     * Get gas limit, gas price and submission price estimates for sending an L1->L2 message
     * @param retryableData Data of retryable ticket transaction
     * @param l1BaseFee Current l1 base fee
     * @param l1Provider
     * @param options
     * @returns
     */
    estimateAll(retryableEstimateData: L1ToL2MessageNoGasParams, l1BaseFee: BigNumber, l1Provider: Provider, options?: GasOverrides): Promise<L1ToL2MessageGasParams>;
    /**
     * Transactions that make an L1->L2 message need to estimate L2 gas parameters
     * This function does that, and populates those parameters into a transaction request
     * @param dataFunc
     * @param l1Provider
     * @param gasOverrides
     * @returns
     */
    populateFunctionParams(
    /**
     * Function that will internally make an L1->L2 transaction
     * Will initially be called with dummy values to trigger a special revert containing
     * the real params. Then called again with the real params to form the final data to be submitted
     */
    dataFunc: (params: OmitTyped<L1ToL2MessageGasParams, 'deposit'>) => L1ToL2TransactionRequest['txRequest'], l1Provider: Provider, gasOverrides?: GasOverrides): Promise<{
        estimates: L1ToL2MessageGasParams;
        retryable: RetryableData;
        data: BytesLike;
        to: string;
        value: BigNumberish;
    }>;
}

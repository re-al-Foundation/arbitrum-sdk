import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type RetryableParamsStruct = {
    inbox: string;
    target: string;
    excessFeeRefundAddress: string;
    callValueRefundAddress: string;
    maxGas: BigNumberish;
    gasPriceBid: BigNumberish;
};
export type RetryableParamsStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
] & {
    inbox: string;
    target: string;
    excessFeeRefundAddress: string;
    callValueRefundAddress: string;
    maxGas: BigNumber;
    gasPriceBid: BigNumber;
};
export type L2TemplateAddressesStruct = {
    routerTemplate: string;
    standardGatewayTemplate: string;
    customGatewayTemplate: string;
    wethGatewayTemplate: string;
    wethTemplate: string;
    upgradeExecutorTemplate: string;
    multicallTemplate: string;
};
export type L2TemplateAddressesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string
] & {
    routerTemplate: string;
    standardGatewayTemplate: string;
    customGatewayTemplate: string;
    wethGatewayTemplate: string;
    wethTemplate: string;
    upgradeExecutorTemplate: string;
    multicallTemplate: string;
};
export type L1DeploymentAddressesStruct = {
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    weth: string;
};
export type L1DeploymentAddressesStructOutput = [
    string,
    string,
    string,
    string,
    string
] & {
    router: string;
    standardGateway: string;
    customGateway: string;
    wethGateway: string;
    weth: string;
};
export interface L1TokenBridgeRetryableSenderInterface extends utils.Interface {
    contractName: "L1TokenBridgeRetryableSender";
    functions: {
        "initialize()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sendRetryable((address,address,address,address,uint256,uint256),(address,address,address,address,address,address,address),(address,address,address,address,address),address,address,address,address,bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendRetryable", values: [
        RetryableParamsStruct,
        L2TemplateAddressesStruct,
        L1DeploymentAddressesStruct,
        string,
        string,
        string,
        string,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendRetryable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface L1TokenBridgeRetryableSender extends BaseContract {
    contractName: "L1TokenBridgeRetryableSender";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1TokenBridgeRetryableSenderInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendRetryable(retryableParams: RetryableParamsStruct, l2: L2TemplateAddressesStruct, l1: L1DeploymentAddressesStruct, l2StandardGatewayAddress: string, rollupOwner: string, deployer: string, l1UpgradeExecutor: string, isUsingFeeToken: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendRetryable(retryableParams: RetryableParamsStruct, l2: L2TemplateAddressesStruct, l1: L1DeploymentAddressesStruct, l2StandardGatewayAddress: string, rollupOwner: string, deployer: string, l1UpgradeExecutor: string, isUsingFeeToken: boolean, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initialize(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sendRetryable(retryableParams: RetryableParamsStruct, l2: L2TemplateAddressesStruct, l1: L1DeploymentAddressesStruct, l2StandardGatewayAddress: string, rollupOwner: string, deployer: string, l1UpgradeExecutor: string, isUsingFeeToken: boolean, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendRetryable(retryableParams: RetryableParamsStruct, l2: L2TemplateAddressesStruct, l1: L1DeploymentAddressesStruct, l2StandardGatewayAddress: string, rollupOwner: string, deployer: string, l1UpgradeExecutor: string, isUsingFeeToken: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendRetryable(retryableParams: RetryableParamsStruct, l2: L2TemplateAddressesStruct, l1: L1DeploymentAddressesStruct, l2StandardGatewayAddress: string, rollupOwner: string, deployer: string, l1UpgradeExecutor: string, isUsingFeeToken: boolean, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGatewayRouterInterface extends utils.Interface {
    contractName: "IGatewayRouter";
    functions: {
        "calculateL2TokenAddress(address)": FunctionFragment;
        "defaultGateway()": FunctionFragment;
        "finalizeInboundTransfer(address,address,address,uint256,bytes)": FunctionFragment;
        "getGateway(address)": FunctionFragment;
        "getOutboundCalldata(address,address,address,uint256,bytes)": FunctionFragment;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "defaultGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "finalizeInboundTransfer", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getGateway", values: [string]): string;
    encodeFunctionData(functionFragment: "getOutboundCalldata", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeInboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutboundCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    events: {
        "DefaultGatewayUpdated(address)": EventFragment;
        "GatewaySet(address,address)": EventFragment;
        "TransferRouted(address,address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DefaultGatewayUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GatewaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferRouted"): EventFragment;
}
export type DefaultGatewayUpdatedEvent = TypedEvent<[
    string
], {
    newDefaultGateway: string;
}>;
export type DefaultGatewayUpdatedEventFilter = TypedEventFilter<DefaultGatewayUpdatedEvent>;
export type GatewaySetEvent = TypedEvent<[
    string,
    string
], {
    l1Token: string;
    gateway: string;
}>;
export type GatewaySetEventFilter = TypedEventFilter<GatewaySetEvent>;
export type TransferRoutedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], {
    token: string;
    _userFrom: string;
    _userTo: string;
    gateway: string;
}>;
export type TransferRoutedEventFilter = TypedEventFilter<TransferRoutedEvent>;
export interface IGatewayRouter extends BaseContract {
    contractName: "IGatewayRouter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGatewayRouterInterface;
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
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<[string]>;
        defaultGateway(overrides?: CallOverrides): Promise<[string] & {
            gateway: string;
        }>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<[string] & {
            gateway: string;
        }>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
    defaultGateway(overrides?: CallOverrides): Promise<string>;
    finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getGateway(_token: string, overrides?: CallOverrides): Promise<string>;
    getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
        defaultGateway(overrides?: CallOverrides): Promise<string>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<string>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DefaultGatewayUpdated(address)"(newDefaultGateway?: null): DefaultGatewayUpdatedEventFilter;
        DefaultGatewayUpdated(newDefaultGateway?: null): DefaultGatewayUpdatedEventFilter;
        "GatewaySet(address,address)"(l1Token?: string | null, gateway?: string | null): GatewaySetEventFilter;
        GatewaySet(l1Token?: string | null, gateway?: string | null): GatewaySetEventFilter;
        "TransferRouted(address,address,address,address)"(token?: string | null, _userFrom?: string | null, _userTo?: string | null, gateway?: null): TransferRoutedEventFilter;
        TransferRouted(token?: string | null, _userFrom?: string | null, _userTo?: string | null, gateway?: null): TransferRoutedEventFilter;
    };
    estimateGas: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultGateway(overrides?: CallOverrides): Promise<BigNumber>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOutboundCalldata(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

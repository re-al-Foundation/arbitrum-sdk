import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbOwnerPublicInterface extends utils.Interface {
    contractName: "ArbOwnerPublic";
    functions: {
        "getAllChainOwners()": FunctionFragment;
        "getBrotliCompressionLevel()": FunctionFragment;
        "getInfraFeeAccount()": FunctionFragment;
        "getNetworkFeeAccount()": FunctionFragment;
        "isChainOwner(address)": FunctionFragment;
        "rectifyChainOwner(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAllChainOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBrotliCompressionLevel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInfraFeeAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNetworkFeeAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "isChainOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "rectifyChainOwner", values: [string]): string;
    decodeFunctionResult(functionFragment: "getAllChainOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBrotliCompressionLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInfraFeeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetworkFeeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isChainOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rectifyChainOwner", data: BytesLike): Result;
    events: {
        "ChainOwnerRectified(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ChainOwnerRectified"): EventFragment;
}
export type ChainOwnerRectifiedEvent = TypedEvent<[
    string
], {
    rectifiedOwner: string;
}>;
export type ChainOwnerRectifiedEventFilter = TypedEventFilter<ChainOwnerRectifiedEvent>;
export interface ArbOwnerPublic extends BaseContract {
    contractName: "ArbOwnerPublic";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbOwnerPublicInterface;
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
        getAllChainOwners(overrides?: CallOverrides): Promise<[string[]]>;
        getBrotliCompressionLevel(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<[string]>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<[string]>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        rectifyChainOwner(ownerToRectify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getAllChainOwners(overrides?: CallOverrides): Promise<string[]>;
    getBrotliCompressionLevel(overrides?: CallOverrides): Promise<BigNumber>;
    getInfraFeeAccount(overrides?: CallOverrides): Promise<string>;
    getNetworkFeeAccount(overrides?: CallOverrides): Promise<string>;
    isChainOwner(addr: string, overrides?: CallOverrides): Promise<boolean>;
    rectifyChainOwner(ownerToRectify: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAllChainOwners(overrides?: CallOverrides): Promise<string[]>;
        getBrotliCompressionLevel(overrides?: CallOverrides): Promise<BigNumber>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<string>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<string>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<boolean>;
        rectifyChainOwner(ownerToRectify: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ChainOwnerRectified(address)"(rectifiedOwner?: null): ChainOwnerRectifiedEventFilter;
        ChainOwnerRectified(rectifiedOwner?: null): ChainOwnerRectifiedEventFilter;
    };
    estimateGas: {
        getAllChainOwners(overrides?: CallOverrides): Promise<BigNumber>;
        getBrotliCompressionLevel(overrides?: CallOverrides): Promise<BigNumber>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<BigNumber>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<BigNumber>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        rectifyChainOwner(ownerToRectify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllChainOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBrotliCompressionLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rectifyChainOwner(ownerToRectify: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

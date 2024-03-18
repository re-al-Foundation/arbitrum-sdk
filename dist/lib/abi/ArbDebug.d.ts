import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbDebugInterface extends utils.Interface {
    contractName: "ArbDebug";
    functions: {
        "becomeChainOwner()": FunctionFragment;
        "customRevert(uint64)": FunctionFragment;
        "events(bool,bytes32)": FunctionFragment;
        "eventsView()": FunctionFragment;
        "legacyError()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "becomeChainOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "customRevert", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "events", values: [boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "eventsView", values?: undefined): string;
    encodeFunctionData(functionFragment: "legacyError", values?: undefined): string;
    decodeFunctionResult(functionFragment: "becomeChainOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eventsView", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "legacyError", data: BytesLike): Result;
    events: {
        "Basic(bool,bytes32)": EventFragment;
        "Mixed(bool,bool,bytes32,address,address)": EventFragment;
        "Store(bool,address,uint24,bytes32,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Basic"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mixed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Store"): EventFragment;
}
export type BasicEvent = TypedEvent<[
    boolean,
    string
], {
    flag: boolean;
    value: string;
}>;
export type BasicEventFilter = TypedEventFilter<BasicEvent>;
export type MixedEvent = TypedEvent<[
    boolean,
    boolean,
    string,
    string,
    string
], {
    flag: boolean;
    not: boolean;
    value: string;
    conn: string;
    caller: string;
}>;
export type MixedEventFilter = TypedEventFilter<MixedEvent>;
export type StoreEvent = TypedEvent<[
    boolean,
    string,
    number,
    string,
    string
], {
    flag: boolean;
    field: string;
    number: number;
    value: string;
    store: string;
}>;
export type StoreEventFilter = TypedEventFilter<StoreEvent>;
export interface ArbDebug extends BaseContract {
    contractName: "ArbDebug";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbDebugInterface;
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
        becomeChainOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        customRevert(number: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        events(flag: boolean, value: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        eventsView(overrides?: CallOverrides): Promise<[void]>;
        legacyError(overrides?: CallOverrides): Promise<[void]>;
    };
    becomeChainOwner(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    customRevert(number: BigNumberish, overrides?: CallOverrides): Promise<void>;
    events(flag: boolean, value: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    eventsView(overrides?: CallOverrides): Promise<void>;
    legacyError(overrides?: CallOverrides): Promise<void>;
    callStatic: {
        becomeChainOwner(overrides?: CallOverrides): Promise<void>;
        customRevert(number: BigNumberish, overrides?: CallOverrides): Promise<void>;
        events(flag: boolean, value: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        eventsView(overrides?: CallOverrides): Promise<void>;
        legacyError(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Basic(bool,bytes32)"(flag?: null, value?: BytesLike | null): BasicEventFilter;
        Basic(flag?: null, value?: BytesLike | null): BasicEventFilter;
        "Mixed(bool,bool,bytes32,address,address)"(flag?: boolean | null, not?: null, value?: BytesLike | null, conn?: null, caller?: string | null): MixedEventFilter;
        Mixed(flag?: boolean | null, not?: null, value?: BytesLike | null, conn?: null, caller?: string | null): MixedEventFilter;
        "Store(bool,address,uint24,bytes32,bytes)"(flag?: boolean | null, field?: string | null, number?: null, value?: null, store?: null): StoreEventFilter;
        Store(flag?: boolean | null, field?: string | null, number?: null, value?: null, store?: null): StoreEventFilter;
    };
    estimateGas: {
        becomeChainOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        customRevert(number: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        events(flag: boolean, value: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        eventsView(overrides?: CallOverrides): Promise<BigNumber>;
        legacyError(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        becomeChainOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        customRevert(number: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        events(flag: boolean, value: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        eventsView(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        legacyError(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

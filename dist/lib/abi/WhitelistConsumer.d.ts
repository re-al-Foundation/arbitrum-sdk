import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface WhitelistConsumerInterface extends utils.Interface {
    contractName: "WhitelistConsumer";
    functions: {
        "updateWhitelistSource(address)": FunctionFragment;
        "whitelist()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "updateWhitelistSource", values: [string]): string;
    encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;
    decodeFunctionResult(functionFragment: "updateWhitelistSource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "WhitelistSourceUpdated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "WhitelistSourceUpdated"): EventFragment;
}
export type WhitelistSourceUpdatedEvent = TypedEvent<[
    string
], {
    newSource: string;
}>;
export type WhitelistSourceUpdatedEventFilter = TypedEventFilter<WhitelistSourceUpdatedEvent>;
export interface WhitelistConsumer extends BaseContract {
    contractName: "WhitelistConsumer";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WhitelistConsumerInterface;
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
        updateWhitelistSource(newSource: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(overrides?: CallOverrides): Promise<[string]>;
    };
    updateWhitelistSource(newSource: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        updateWhitelistSource(newSource: string, overrides?: CallOverrides): Promise<void>;
        whitelist(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "WhitelistSourceUpdated(address)"(newSource?: null): WhitelistSourceUpdatedEventFilter;
        WhitelistSourceUpdated(newSource?: null): WhitelistSourceUpdatedEventFilter;
    };
    estimateGas: {
        updateWhitelistSource(newSource: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        updateWhitelistSource(newSource: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

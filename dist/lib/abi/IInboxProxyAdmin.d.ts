import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IInboxProxyAdminInterface extends utils.Interface {
    contractName: "IInboxProxyAdmin";
    functions: {
        "getProxyAdmin()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getProxyAdmin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getProxyAdmin", data: BytesLike): Result;
    events: {};
}
export interface IInboxProxyAdmin extends BaseContract {
    contractName: "IInboxProxyAdmin";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IInboxProxyAdminInterface;
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
        getProxyAdmin(overrides?: CallOverrides): Promise<[string]>;
    };
    getProxyAdmin(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getProxyAdmin(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getProxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getProxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

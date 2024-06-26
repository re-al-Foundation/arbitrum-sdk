import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CreationCodeTestInterface extends utils.Interface {
    contractName: "CreationCodeTest";
    functions: {
        "creationCodeFor(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "creationCodeFor", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "creationCodeFor", data: BytesLike): Result;
    events: {};
}
export interface CreationCodeTest extends BaseContract {
    contractName: "CreationCodeTest";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreationCodeTestInterface;
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
        creationCodeFor(code: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    creationCodeFor(code: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        creationCodeFor(code: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        creationCodeFor(code: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        creationCodeFor(code: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface RollupMockInterface extends utils.Interface {
  contractName: "RollupMock";
  functions: {
    "removeOldZombies(uint256)": FunctionFragment;
    "withdrawStakerFunds()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "removeOldZombies",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStakerFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "removeOldZombies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStakerFunds",
    data: BytesLike
  ): Result;

  events: {
    "WithdrawTriggered()": EventFragment;
    "ZombieTriggered()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WithdrawTriggered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZombieTriggered"): EventFragment;
}

export type WithdrawTriggeredEvent = TypedEvent<[], {}>;

export type WithdrawTriggeredEventFilter =
  TypedEventFilter<WithdrawTriggeredEvent>;

export type ZombieTriggeredEvent = TypedEvent<[], {}>;

export type ZombieTriggeredEventFilter = TypedEventFilter<ZombieTriggeredEvent>;

export interface RollupMock extends BaseContract {
  contractName: "RollupMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RollupMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    removeOldZombies(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawStakerFunds(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  removeOldZombies(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawStakerFunds(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    removeOldZombies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawStakerFunds(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "WithdrawTriggered()"(): WithdrawTriggeredEventFilter;
    WithdrawTriggered(): WithdrawTriggeredEventFilter;

    "ZombieTriggered()"(): ZombieTriggeredEventFilter;
    ZombieTriggered(): ZombieTriggeredEventFilter;
  };

  estimateGas: {
    removeOldZombies(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawStakerFunds(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    removeOldZombies(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawStakerFunds(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

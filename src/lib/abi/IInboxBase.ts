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

export interface IInboxBaseInterface extends utils.Interface {
  contractName: "IInboxBase";
  functions: {
    "allowListEnabled()": FunctionFragment;
    "bridge()": FunctionFragment;
    "calculateRetryableSubmissionFee(uint256,uint256)": FunctionFragment;
    "getProxyAdmin()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isAllowed(address)": FunctionFragment;
    "maxDataSize()": FunctionFragment;
    "pause()": FunctionFragment;
    "sendContractTransaction(uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "sendL2Message(bytes)": FunctionFragment;
    "sendL2MessageFromOrigin(bytes)": FunctionFragment;
    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "sequencerInbox()": FunctionFragment;
    "setAllowList(address[],bool[])": FunctionFragment;
    "setAllowListEnabled(bool)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowListEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateRetryableSubmissionFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isAllowed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "maxDataSize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendContractTransaction",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL2Message",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL2MessageFromOrigin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendUnsignedTransaction",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sequencerInbox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowList",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowListEnabled",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "allowListEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateRetryableSubmissionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxDataSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendContractTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL2Message",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL2MessageFromOrigin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendUnsignedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sequencerInbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowListEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "InboxMessageDelivered(uint256,bytes)": EventFragment;
    "InboxMessageDeliveredFromOrigin(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InboxMessageDelivered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InboxMessageDeliveredFromOrigin"
  ): EventFragment;
}

export type InboxMessageDeliveredEvent = TypedEvent<
  [BigNumber, string],
  { messageNum: BigNumber; data: string }
>;

export type InboxMessageDeliveredEventFilter =
  TypedEventFilter<InboxMessageDeliveredEvent>;

export type InboxMessageDeliveredFromOriginEvent = TypedEvent<
  [BigNumber],
  { messageNum: BigNumber }
>;

export type InboxMessageDeliveredFromOriginEventFilter =
  TypedEventFilter<InboxMessageDeliveredFromOriginEvent>;

export interface IInboxBase extends BaseContract {
  contractName: "IInboxBase";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInboxBaseInterface;

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
    allowListEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    bridge(overrides?: CallOverrides): Promise<[string]>;

    calculateRetryableSubmissionFee(
      dataLength: BigNumberish,
      baseFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProxyAdmin(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _bridge: string,
      _sequencerInbox: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAllowed(user: string, overrides?: CallOverrides): Promise<[boolean]>;

    maxDataSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendContractTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendUnsignedTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      nonce: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sequencerInbox(overrides?: CallOverrides): Promise<[string]>;

    setAllowList(
      user: string[],
      val: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowListEnabled(
      _allowListEnabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowListEnabled(overrides?: CallOverrides): Promise<boolean>;

  bridge(overrides?: CallOverrides): Promise<string>;

  calculateRetryableSubmissionFee(
    dataLength: BigNumberish,
    baseFee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProxyAdmin(overrides?: CallOverrides): Promise<string>;

  initialize(
    _bridge: string,
    _sequencerInbox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAllowed(user: string, overrides?: CallOverrides): Promise<boolean>;

  maxDataSize(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendContractTransaction(
    gasLimit: BigNumberish,
    maxFeePerGas: BigNumberish,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendL2Message(
    messageData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendL2MessageFromOrigin(
    messageData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendUnsignedTransaction(
    gasLimit: BigNumberish,
    maxFeePerGas: BigNumberish,
    nonce: BigNumberish,
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sequencerInbox(overrides?: CallOverrides): Promise<string>;

  setAllowList(
    user: string[],
    val: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowListEnabled(
    _allowListEnabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowListEnabled(overrides?: CallOverrides): Promise<boolean>;

    bridge(overrides?: CallOverrides): Promise<string>;

    calculateRetryableSubmissionFee(
      dataLength: BigNumberish,
      baseFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProxyAdmin(overrides?: CallOverrides): Promise<string>;

    initialize(
      _bridge: string,
      _sequencerInbox: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAllowed(user: string, overrides?: CallOverrides): Promise<boolean>;

    maxDataSize(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    sendContractTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendUnsignedTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      nonce: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sequencerInbox(overrides?: CallOverrides): Promise<string>;

    setAllowList(
      user: string[],
      val: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setAllowListEnabled(
      _allowListEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "InboxMessageDelivered(uint256,bytes)"(
      messageNum?: BigNumberish | null,
      data?: null
    ): InboxMessageDeliveredEventFilter;
    InboxMessageDelivered(
      messageNum?: BigNumberish | null,
      data?: null
    ): InboxMessageDeliveredEventFilter;

    "InboxMessageDeliveredFromOrigin(uint256)"(
      messageNum?: BigNumberish | null
    ): InboxMessageDeliveredFromOriginEventFilter;
    InboxMessageDeliveredFromOrigin(
      messageNum?: BigNumberish | null
    ): InboxMessageDeliveredFromOriginEventFilter;
  };

  estimateGas: {
    allowListEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    calculateRetryableSubmissionFee(
      dataLength: BigNumberish,
      baseFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _bridge: string,
      _sequencerInbox: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAllowed(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxDataSize(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendContractTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendUnsignedTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      nonce: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;

    setAllowList(
      user: string[],
      val: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowListEnabled(
      _allowListEnabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowListEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateRetryableSubmissionFee(
      dataLength: BigNumberish,
      baseFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _bridge: string,
      _sequencerInbox: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAllowed(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxDataSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendContractTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendUnsignedTransaction(
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      nonce: BigNumberish,
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAllowList(
      user: string[],
      val: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowListEnabled(
      _allowListEnabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

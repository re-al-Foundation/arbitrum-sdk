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

export interface ERC20InboxMockInterface extends utils.Interface {
  contractName: "ERC20InboxMock";
  functions: {
    "activeOutbox()": FunctionFragment;
    "bridge()": FunctionFragment;
    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
    "l2ToL1Sender()": FunctionFragment;
    "l2ToL1SenderMock()": FunctionFragment;
    "nativeToken()": FunctionFragment;
    "seqNum()": FunctionFragment;
    "setL2ToL1Sender(address)": FunctionFragment;
    "setMockNativeToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activeOutbox",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createRetryableTicket",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1Sender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1SenderMock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nativeToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "seqNum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setL2ToL1Sender",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMockNativeToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeOutbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRetryableTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1Sender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1SenderMock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seqNum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setL2ToL1Sender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMockNativeToken",
    data: BytesLike
  ): Result;

  events: {
    "ERC20InboxRetryableTicket(address,address,uint256,uint256,uint256,uint256,bytes)": EventFragment;
    "InboxRetryableTicket(address,address,uint256,uint256,bytes)": EventFragment;
    "RefundAddresses(address,address)": EventFragment;
    "TicketData(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20InboxRetryableTicket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InboxRetryableTicket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundAddresses"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TicketData"): EventFragment;
}

export type ERC20InboxRetryableTicketEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber, string],
  {
    from: string;
    to: string;
    l2CallValue: BigNumber;
    maxGas: BigNumber;
    gasPrice: BigNumber;
    tokenTotalFeeAmount: BigNumber;
    data: string;
  }
>;

export type ERC20InboxRetryableTicketEventFilter =
  TypedEventFilter<ERC20InboxRetryableTicketEvent>;

export type InboxRetryableTicketEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string],
  {
    from: string;
    to: string;
    value: BigNumber;
    maxGas: BigNumber;
    data: string;
  }
>;

export type InboxRetryableTicketEventFilter =
  TypedEventFilter<InboxRetryableTicketEvent>;

export type RefundAddressesEvent = TypedEvent<
  [string, string],
  { excessFeeRefundAddress: string; callValueRefundAddress: string }
>;

export type RefundAddressesEventFilter = TypedEventFilter<RefundAddressesEvent>;

export type TicketDataEvent = TypedEvent<
  [BigNumber],
  { maxSubmissionCost: BigNumber }
>;

export type TicketDataEventFilter = TypedEventFilter<TicketDataEvent>;

export interface ERC20InboxMock extends BaseContract {
  contractName: "ERC20InboxMock";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20InboxMockInterface;

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
    activeOutbox(overrides?: CallOverrides): Promise<[string]>;

    bridge(overrides?: CallOverrides): Promise<[string]>;

    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      tokenTotalFeeAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<[string]>;

    l2ToL1SenderMock(overrides?: CallOverrides): Promise<[string]>;

    nativeToken(overrides?: CallOverrides): Promise<[string]>;

    seqNum(overrides?: CallOverrides): Promise<[BigNumber]>;

    setL2ToL1Sender(
      sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMockNativeToken(
      _nativeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  activeOutbox(overrides?: CallOverrides): Promise<string>;

  bridge(overrides?: CallOverrides): Promise<string>;

  createRetryableTicket(
    to: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    gasLimit: BigNumberish,
    maxFeePerGas: BigNumberish,
    tokenTotalFeeAmount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  l2ToL1Sender(overrides?: CallOverrides): Promise<string>;

  l2ToL1SenderMock(overrides?: CallOverrides): Promise<string>;

  nativeToken(overrides?: CallOverrides): Promise<string>;

  seqNum(overrides?: CallOverrides): Promise<BigNumber>;

  setL2ToL1Sender(
    sender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMockNativeToken(
    _nativeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activeOutbox(overrides?: CallOverrides): Promise<string>;

    bridge(overrides?: CallOverrides): Promise<string>;

    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      tokenTotalFeeAmount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<string>;

    l2ToL1SenderMock(overrides?: CallOverrides): Promise<string>;

    nativeToken(overrides?: CallOverrides): Promise<string>;

    seqNum(overrides?: CallOverrides): Promise<BigNumber>;

    setL2ToL1Sender(sender: string, overrides?: CallOverrides): Promise<void>;

    setMockNativeToken(
      _nativeToken: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ERC20InboxRetryableTicket(address,address,uint256,uint256,uint256,uint256,bytes)"(
      from?: null,
      to?: null,
      l2CallValue?: null,
      maxGas?: null,
      gasPrice?: null,
      tokenTotalFeeAmount?: null,
      data?: null
    ): ERC20InboxRetryableTicketEventFilter;
    ERC20InboxRetryableTicket(
      from?: null,
      to?: null,
      l2CallValue?: null,
      maxGas?: null,
      gasPrice?: null,
      tokenTotalFeeAmount?: null,
      data?: null
    ): ERC20InboxRetryableTicketEventFilter;

    "InboxRetryableTicket(address,address,uint256,uint256,bytes)"(
      from?: null,
      to?: null,
      value?: null,
      maxGas?: null,
      data?: null
    ): InboxRetryableTicketEventFilter;
    InboxRetryableTicket(
      from?: null,
      to?: null,
      value?: null,
      maxGas?: null,
      data?: null
    ): InboxRetryableTicketEventFilter;

    "RefundAddresses(address,address)"(
      excessFeeRefundAddress?: null,
      callValueRefundAddress?: null
    ): RefundAddressesEventFilter;
    RefundAddresses(
      excessFeeRefundAddress?: null,
      callValueRefundAddress?: null
    ): RefundAddressesEventFilter;

    "TicketData(uint256)"(maxSubmissionCost?: null): TicketDataEventFilter;
    TicketData(maxSubmissionCost?: null): TicketDataEventFilter;
  };

  estimateGas: {
    activeOutbox(overrides?: CallOverrides): Promise<BigNumber>;

    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      tokenTotalFeeAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1SenderMock(overrides?: CallOverrides): Promise<BigNumber>;

    nativeToken(overrides?: CallOverrides): Promise<BigNumber>;

    seqNum(overrides?: CallOverrides): Promise<BigNumber>;

    setL2ToL1Sender(
      sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMockNativeToken(
      _nativeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeOutbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createRetryableTicket(
      to: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      gasLimit: BigNumberish,
      maxFeePerGas: BigNumberish,
      tokenTotalFeeAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1SenderMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seqNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setL2ToL1Sender(
      sender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMockNativeToken(
      _nativeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

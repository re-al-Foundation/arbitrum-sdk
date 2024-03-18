import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AbsOutboxInterface extends utils.Interface {
    contractName: "AbsOutbox";
    functions: {
        "OUTBOX_VERSION()": FunctionFragment;
        "bridge()": FunctionFragment;
        "calculateItemHash(address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
        "calculateMerkleRoot(bytes32[],uint256,bytes32)": FunctionFragment;
        "executeTransaction(bytes32[],uint256,address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
        "executeTransactionSimulation(uint256,address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isSpent(uint256)": FunctionFragment;
        "l2ToL1BatchNum()": FunctionFragment;
        "l2ToL1Block()": FunctionFragment;
        "l2ToL1EthBlock()": FunctionFragment;
        "l2ToL1OutputId()": FunctionFragment;
        "l2ToL1Sender()": FunctionFragment;
        "l2ToL1Timestamp()": FunctionFragment;
        "postUpgradeInit()": FunctionFragment;
        "rollup()": FunctionFragment;
        "roots(bytes32)": FunctionFragment;
        "spent(uint256)": FunctionFragment;
        "updateRollupAddress()": FunctionFragment;
        "updateSendRoot(bytes32,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "OUTBOX_VERSION", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateItemHash", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "calculateMerkleRoot", values: [BytesLike[], BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [
        BytesLike[],
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "executeTransactionSimulation", values: [
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isSpent", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "l2ToL1BatchNum", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1Block", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1EthBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1OutputId", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1Sender", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2ToL1Timestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "postUpgradeInit", values?: undefined): string;
    encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
    encodeFunctionData(functionFragment: "roots", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "spent", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateRollupAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateSendRoot", values: [BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "OUTBOX_VERSION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateItemHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateMerkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransactionSimulation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1BatchNum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1Block", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1EthBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1OutputId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1Sender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2ToL1Timestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postUpgradeInit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRollupAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSendRoot", data: BytesLike): Result;
    events: {
        "OutBoxTransactionExecuted(address,address,uint256,uint256)": EventFragment;
        "SendRootUpdated(bytes32,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OutBoxTransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendRootUpdated"): EventFragment;
}
export type OutBoxTransactionExecutedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], {
    to: string;
    l2Sender: string;
    zero: BigNumber;
    transactionIndex: BigNumber;
}>;
export type OutBoxTransactionExecutedEventFilter = TypedEventFilter<OutBoxTransactionExecutedEvent>;
export type SendRootUpdatedEvent = TypedEvent<[
    string,
    string
], {
    outputRoot: string;
    l2BlockHash: string;
}>;
export type SendRootUpdatedEventFilter = TypedEventFilter<SendRootUpdatedEvent>;
export interface AbsOutbox extends BaseContract {
    contractName: "AbsOutbox";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AbsOutboxInterface;
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
        OUTBOX_VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;
        bridge(overrides?: CallOverrides): Promise<[string]>;
        calculateItemHash(l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        calculateMerkleRoot(proof: BytesLike[], path: BigNumberish, item: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        executeTransaction(proof: BytesLike[], index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeTransactionSimulation(index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isSpent(index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        l2ToL1BatchNum(overrides?: CallOverrides): Promise<[BigNumber]>;
        l2ToL1Block(overrides?: CallOverrides): Promise<[BigNumber]>;
        l2ToL1EthBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        l2ToL1OutputId(overrides?: CallOverrides): Promise<[string]>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<[string]>;
        l2ToL1Timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rollup(overrides?: CallOverrides): Promise<[string]>;
        roots(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        spent(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        updateRollupAddress(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateSendRoot(root: BytesLike, l2BlockHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
    bridge(overrides?: CallOverrides): Promise<string>;
    calculateItemHash(l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    calculateMerkleRoot(proof: BytesLike[], path: BigNumberish, item: BytesLike, overrides?: CallOverrides): Promise<string>;
    executeTransaction(proof: BytesLike[], index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeTransactionSimulation(index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bridge: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isSpent(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>;
    l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>;
    l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>;
    l2ToL1OutputId(overrides?: CallOverrides): Promise<string>;
    l2ToL1Sender(overrides?: CallOverrides): Promise<string>;
    l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>;
    postUpgradeInit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rollup(overrides?: CallOverrides): Promise<string>;
    roots(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    spent(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    updateRollupAddress(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateSendRoot(root: BytesLike, l2BlockHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<string>;
        calculateItemHash(l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        calculateMerkleRoot(proof: BytesLike[], path: BigNumberish, item: BytesLike, overrides?: CallOverrides): Promise<string>;
        executeTransaction(proof: BytesLike[], index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeTransactionSimulation(index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        initialize(_bridge: string, overrides?: CallOverrides): Promise<void>;
        isSpent(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1OutputId(overrides?: CallOverrides): Promise<string>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<string>;
        l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        postUpgradeInit(overrides?: CallOverrides): Promise<void>;
        rollup(overrides?: CallOverrides): Promise<string>;
        roots(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        spent(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        updateRollupAddress(overrides?: CallOverrides): Promise<void>;
        updateSendRoot(root: BytesLike, l2BlockHash: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OutBoxTransactionExecuted(address,address,uint256,uint256)"(to?: string | null, l2Sender?: string | null, zero?: BigNumberish | null, transactionIndex?: null): OutBoxTransactionExecutedEventFilter;
        OutBoxTransactionExecuted(to?: string | null, l2Sender?: string | null, zero?: BigNumberish | null, transactionIndex?: null): OutBoxTransactionExecutedEventFilter;
        "SendRootUpdated(bytes32,bytes32)"(outputRoot?: BytesLike | null, l2BlockHash?: BytesLike | null): SendRootUpdatedEventFilter;
        SendRootUpdated(outputRoot?: BytesLike | null, l2BlockHash?: BytesLike | null): SendRootUpdatedEventFilter;
    };
    estimateGas: {
        OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        calculateItemHash(l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        calculateMerkleRoot(proof: BytesLike[], path: BigNumberish, item: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(proof: BytesLike[], index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeTransactionSimulation(index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isSpent(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1OutputId(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<BigNumber>;
        l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rollup(overrides?: CallOverrides): Promise<BigNumber>;
        roots(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        spent(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        updateRollupAddress(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateSendRoot(root: BytesLike, l2BlockHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        OUTBOX_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateItemHash(l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateMerkleRoot(proof: BytesLike[], path: BigNumberish, item: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(proof: BytesLike[], index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeTransactionSimulation(index: BigNumberish, l2Sender: string, to: string, l2Block: BigNumberish, l1Block: BigNumberish, l2Timestamp: BigNumberish, value: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bridge: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isSpent(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1BatchNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1Block(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1EthBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1OutputId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1Sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2ToL1Timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        roots(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        spent(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateRollupAddress(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateSendRoot(root: BytesLike, l2BlockHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

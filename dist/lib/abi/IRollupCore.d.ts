import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type GlobalStateStruct = {
    bytes32Vals: [BytesLike, BytesLike];
    u64Vals: [BigNumberish, BigNumberish];
};
export type GlobalStateStructOutput = [
    [
        string,
        string
    ],
    [
        BigNumber,
        BigNumber
    ]
] & {
    bytes32Vals: [string, string];
    u64Vals: [BigNumber, BigNumber];
};
export type ExecutionStateStruct = {
    globalState: GlobalStateStruct;
    machineStatus: BigNumberish;
};
export type ExecutionStateStructOutput = [GlobalStateStructOutput, number] & {
    globalState: GlobalStateStructOutput;
    machineStatus: number;
};
export type AssertionStruct = {
    beforeState: ExecutionStateStruct;
    afterState: ExecutionStateStruct;
    numBlocks: BigNumberish;
};
export type AssertionStructOutput = [
    ExecutionStateStructOutput,
    ExecutionStateStructOutput,
    BigNumber
] & {
    beforeState: ExecutionStateStructOutput;
    afterState: ExecutionStateStructOutput;
    numBlocks: BigNumber;
};
export type NodeStruct = {
    stateHash: BytesLike;
    challengeHash: BytesLike;
    confirmData: BytesLike;
    prevNum: BigNumberish;
    deadlineBlock: BigNumberish;
    noChildConfirmedBeforeBlock: BigNumberish;
    stakerCount: BigNumberish;
    childStakerCount: BigNumberish;
    firstChildBlock: BigNumberish;
    latestChildNumber: BigNumberish;
    createdAtBlock: BigNumberish;
    nodeHash: BytesLike;
};
export type NodeStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
] & {
    stateHash: string;
    challengeHash: string;
    confirmData: string;
    prevNum: BigNumber;
    deadlineBlock: BigNumber;
    noChildConfirmedBeforeBlock: BigNumber;
    stakerCount: BigNumber;
    childStakerCount: BigNumber;
    firstChildBlock: BigNumber;
    latestChildNumber: BigNumber;
    createdAtBlock: BigNumber;
    nodeHash: string;
};
export declare namespace IRollupCore {
    type StakerStruct = {
        amountStaked: BigNumberish;
        index: BigNumberish;
        latestStakedNode: BigNumberish;
        currentChallenge: BigNumberish;
        isStaked: boolean;
    };
    type StakerStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        amountStaked: BigNumber;
        index: BigNumber;
        latestStakedNode: BigNumber;
        currentChallenge: BigNumber;
        isStaked: boolean;
    };
}
export interface IRollupCoreInterface extends utils.Interface {
    contractName: "IRollupCore";
    functions: {
        "amountStaked(address)": FunctionFragment;
        "baseStake()": FunctionFragment;
        "bridge()": FunctionFragment;
        "chainId()": FunctionFragment;
        "challengeManager()": FunctionFragment;
        "confirmPeriodBlocks()": FunctionFragment;
        "currentChallenge(address)": FunctionFragment;
        "extraChallengeTimeBlocks()": FunctionFragment;
        "firstUnresolvedNode()": FunctionFragment;
        "getNode(uint64)": FunctionFragment;
        "getNodeCreationBlockForLogLookup(uint64)": FunctionFragment;
        "getStaker(address)": FunctionFragment;
        "getStakerAddress(uint64)": FunctionFragment;
        "isStaked(address)": FunctionFragment;
        "isValidator(address)": FunctionFragment;
        "isZombie(address)": FunctionFragment;
        "lastStakeBlock()": FunctionFragment;
        "latestConfirmed()": FunctionFragment;
        "latestNodeCreated()": FunctionFragment;
        "latestStakedNode(address)": FunctionFragment;
        "loserStakeEscrow()": FunctionFragment;
        "minimumAssertionPeriod()": FunctionFragment;
        "nodeHasStaker(uint64,address)": FunctionFragment;
        "outbox()": FunctionFragment;
        "rollupEventInbox()": FunctionFragment;
        "sequencerInbox()": FunctionFragment;
        "stakeToken()": FunctionFragment;
        "stakerCount()": FunctionFragment;
        "validatorWhitelistDisabled()": FunctionFragment;
        "wasmModuleRoot()": FunctionFragment;
        "withdrawableFunds(address)": FunctionFragment;
        "zombieAddress(uint256)": FunctionFragment;
        "zombieCount()": FunctionFragment;
        "zombieLatestStakedNode(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "amountStaked", values: [string]): string;
    encodeFunctionData(functionFragment: "baseStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "challengeManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmPeriodBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentChallenge", values: [string]): string;
    encodeFunctionData(functionFragment: "extraChallengeTimeBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstUnresolvedNode", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNode", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNodeCreationBlockForLogLookup", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getStaker", values: [string]): string;
    encodeFunctionData(functionFragment: "getStakerAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isStaked", values: [string]): string;
    encodeFunctionData(functionFragment: "isValidator", values: [string]): string;
    encodeFunctionData(functionFragment: "isZombie", values: [string]): string;
    encodeFunctionData(functionFragment: "lastStakeBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestConfirmed", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestNodeCreated", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestStakedNode", values: [string]): string;
    encodeFunctionData(functionFragment: "loserStakeEscrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "minimumAssertionPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "nodeHasStaker", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "outbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "rollupEventInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "sequencerInbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakerCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorWhitelistDisabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "wasmModuleRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableFunds", values: [string]): string;
    encodeFunctionData(functionFragment: "zombieAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "zombieCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "zombieLatestStakedNode", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "amountStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challengeManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmPeriodBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraChallengeTimeBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstUnresolvedNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeCreationBlockForLogLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isZombie", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastStakeBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestConfirmed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestNodeCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestStakedNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "loserStakeEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minimumAssertionPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nodeHasStaker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollupEventInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerInbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakerCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorWhitelistDisabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wasmModuleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zombieAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zombieCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zombieLatestStakedNode", data: BytesLike): Result;
    events: {
        "NodeConfirmed(uint64,bytes32,bytes32)": EventFragment;
        "NodeCreated(uint64,bytes32,bytes32,bytes32,tuple,bytes32,bytes32,uint256)": EventFragment;
        "NodeRejected(uint64)": EventFragment;
        "RollupChallengeStarted(uint64,address,address,uint64)": EventFragment;
        "RollupInitialized(bytes32,uint256)": EventFragment;
        "UserStakeUpdated(address,uint256,uint256)": EventFragment;
        "UserWithdrawableFundsUpdated(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NodeConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeRejected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RollupChallengeStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RollupInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserStakeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserWithdrawableFundsUpdated"): EventFragment;
}
export type NodeConfirmedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], {
    nodeNum: BigNumber;
    blockHash: string;
    sendRoot: string;
}>;
export type NodeConfirmedEventFilter = TypedEventFilter<NodeConfirmedEvent>;
export type NodeCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    AssertionStructOutput,
    string,
    string,
    BigNumber
], {
    nodeNum: BigNumber;
    parentNodeHash: string;
    nodeHash: string;
    executionHash: string;
    assertion: AssertionStructOutput;
    afterInboxBatchAcc: string;
    wasmModuleRoot: string;
    inboxMaxCount: BigNumber;
}>;
export type NodeCreatedEventFilter = TypedEventFilter<NodeCreatedEvent>;
export type NodeRejectedEvent = TypedEvent<[BigNumber], {
    nodeNum: BigNumber;
}>;
export type NodeRejectedEventFilter = TypedEventFilter<NodeRejectedEvent>;
export type RollupChallengeStartedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], {
    challengeIndex: BigNumber;
    asserter: string;
    challenger: string;
    challengedNode: BigNumber;
}>;
export type RollupChallengeStartedEventFilter = TypedEventFilter<RollupChallengeStartedEvent>;
export type RollupInitializedEvent = TypedEvent<[
    string,
    BigNumber
], {
    machineHash: string;
    chainId: BigNumber;
}>;
export type RollupInitializedEventFilter = TypedEventFilter<RollupInitializedEvent>;
export type UserStakeUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    initialBalance: BigNumber;
    finalBalance: BigNumber;
}>;
export type UserStakeUpdatedEventFilter = TypedEventFilter<UserStakeUpdatedEvent>;
export type UserWithdrawableFundsUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    initialBalance: BigNumber;
    finalBalance: BigNumber;
}>;
export type UserWithdrawableFundsUpdatedEventFilter = TypedEventFilter<UserWithdrawableFundsUpdatedEvent>;
export interface IRollupCore extends BaseContract {
    contractName: "IRollupCore";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRollupCoreInterface;
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
        amountStaked(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseStake(overrides?: CallOverrides): Promise<[BigNumber]>;
        bridge(overrides?: CallOverrides): Promise<[string]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        challengeManager(overrides?: CallOverrides): Promise<[string]>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<[NodeStructOutput]>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<[IRollupCore.StakerStructOutput]>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        lastStakeBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestConfirmed(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestNodeCreated(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<[string]>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        outbox(overrides?: CallOverrides): Promise<[string]>;
        rollupEventInbox(overrides?: CallOverrides): Promise<[string]>;
        sequencerInbox(overrides?: CallOverrides): Promise<[string]>;
        stakeToken(overrides?: CallOverrides): Promise<[string]>;
        stakerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<[boolean]>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<[string]>;
        withdrawableFunds(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        zombieCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    baseStake(overrides?: CallOverrides): Promise<BigNumber>;
    bridge(overrides?: CallOverrides): Promise<string>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    challengeManager(overrides?: CallOverrides): Promise<string>;
    confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    currentChallenge(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>;
    getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<NodeStructOutput>;
    getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getStaker(staker: string, overrides?: CallOverrides): Promise<IRollupCore.StakerStructOutput>;
    getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
    isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>;
    isValidator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    isZombie(staker: string, overrides?: CallOverrides): Promise<boolean>;
    lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>;
    latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
    latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>;
    latestStakedNode(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    loserStakeEscrow(overrides?: CallOverrides): Promise<string>;
    minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<boolean>;
    outbox(overrides?: CallOverrides): Promise<string>;
    rollupEventInbox(overrides?: CallOverrides): Promise<string>;
    sequencerInbox(overrides?: CallOverrides): Promise<string>;
    stakeToken(overrides?: CallOverrides): Promise<string>;
    stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
    validatorWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;
    wasmModuleRoot(overrides?: CallOverrides): Promise<string>;
    withdrawableFunds(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
    zombieCount(overrides?: CallOverrides): Promise<BigNumber>;
    zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseStake(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<string>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManager(overrides?: CallOverrides): Promise<string>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<NodeStructOutput>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<IRollupCore.StakerStructOutput>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<boolean>;
        lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>;
        latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
        latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<string>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<boolean>;
        outbox(overrides?: CallOverrides): Promise<string>;
        rollupEventInbox(overrides?: CallOverrides): Promise<string>;
        sequencerInbox(overrides?: CallOverrides): Promise<string>;
        stakeToken(overrides?: CallOverrides): Promise<string>;
        stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<string>;
        withdrawableFunds(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
        zombieCount(overrides?: CallOverrides): Promise<BigNumber>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NodeConfirmed(uint64,bytes32,bytes32)"(nodeNum?: BigNumberish | null, blockHash?: null, sendRoot?: null): NodeConfirmedEventFilter;
        NodeConfirmed(nodeNum?: BigNumberish | null, blockHash?: null, sendRoot?: null): NodeConfirmedEventFilter;
        "NodeCreated(uint64,bytes32,bytes32,bytes32,tuple,bytes32,bytes32,uint256)"(nodeNum?: BigNumberish | null, parentNodeHash?: BytesLike | null, nodeHash?: BytesLike | null, executionHash?: null, assertion?: null, afterInboxBatchAcc?: null, wasmModuleRoot?: null, inboxMaxCount?: null): NodeCreatedEventFilter;
        NodeCreated(nodeNum?: BigNumberish | null, parentNodeHash?: BytesLike | null, nodeHash?: BytesLike | null, executionHash?: null, assertion?: null, afterInboxBatchAcc?: null, wasmModuleRoot?: null, inboxMaxCount?: null): NodeCreatedEventFilter;
        "NodeRejected(uint64)"(nodeNum?: BigNumberish | null): NodeRejectedEventFilter;
        NodeRejected(nodeNum?: BigNumberish | null): NodeRejectedEventFilter;
        "RollupChallengeStarted(uint64,address,address,uint64)"(challengeIndex?: BigNumberish | null, asserter?: null, challenger?: null, challengedNode?: null): RollupChallengeStartedEventFilter;
        RollupChallengeStarted(challengeIndex?: BigNumberish | null, asserter?: null, challenger?: null, challengedNode?: null): RollupChallengeStartedEventFilter;
        "RollupInitialized(bytes32,uint256)"(machineHash?: null, chainId?: null): RollupInitializedEventFilter;
        RollupInitialized(machineHash?: null, chainId?: null): RollupInitializedEventFilter;
        "UserStakeUpdated(address,uint256,uint256)"(user?: string | null, initialBalance?: null, finalBalance?: null): UserStakeUpdatedEventFilter;
        UserStakeUpdated(user?: string | null, initialBalance?: null, finalBalance?: null): UserStakeUpdatedEventFilter;
        "UserWithdrawableFundsUpdated(address,uint256,uint256)"(user?: string | null, initialBalance?: null, finalBalance?: null): UserWithdrawableFundsUpdatedEventFilter;
        UserWithdrawableFundsUpdated(user?: string | null, initialBalance?: null, finalBalance?: null): UserWithdrawableFundsUpdatedEventFilter;
    };
    estimateGas: {
        amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseStake(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManager(overrides?: CallOverrides): Promise<BigNumber>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<BigNumber>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastStakeBlock(overrides?: CallOverrides): Promise<BigNumber>;
        latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
        latestNodeCreated(overrides?: CallOverrides): Promise<BigNumber>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        outbox(overrides?: CallOverrides): Promise<BigNumber>;
        rollupEventInbox(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;
        stakeToken(overrides?: CallOverrides): Promise<BigNumber>;
        stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<BigNumber>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableFunds(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        zombieCount(overrides?: CallOverrides): Promise<BigNumber>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        amountStaked(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        challengeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentChallenge(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraChallengeTimeBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        firstUnresolvedNode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNode(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNodeCreationBlockForLogLookup(nodeNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidator(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isZombie(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastStakeBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestConfirmed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestNodeCreated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestStakedNode(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nodeHasStaker(nodeNum: BigNumberish, staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rollupEventInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawableFunds(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zombieAddress(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zombieCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zombieLatestStakedNode(zombieNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

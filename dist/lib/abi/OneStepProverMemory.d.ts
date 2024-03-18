import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ExecutionContextStruct = {
    maxInboxMessagesRead: BigNumberish;
    bridge: string;
};
export type ExecutionContextStructOutput = [BigNumber, string] & {
    maxInboxMessagesRead: BigNumber;
    bridge: string;
};
export type ValueStruct = {
    valueType: BigNumberish;
    contents: BigNumberish;
};
export type ValueStructOutput = [number, BigNumber] & {
    valueType: number;
    contents: BigNumber;
};
export type ValueArrayStruct = {
    inner: ValueStruct[];
};
export type ValueArrayStructOutput = [ValueStructOutput[]] & {
    inner: ValueStructOutput[];
};
export type ValueStackStruct = {
    proved: ValueArrayStruct;
    remainingHash: BytesLike;
};
export type ValueStackStructOutput = [ValueArrayStructOutput, string] & {
    proved: ValueArrayStructOutput;
    remainingHash: string;
};
export type StackFrameStruct = {
    returnPc: ValueStruct;
    localsMerkleRoot: BytesLike;
    callerModule: BigNumberish;
    callerModuleInternals: BigNumberish;
};
export type StackFrameStructOutput = [
    ValueStructOutput,
    string,
    number,
    number
] & {
    returnPc: ValueStructOutput;
    localsMerkleRoot: string;
    callerModule: number;
    callerModuleInternals: number;
};
export type StackFrameWindowStruct = {
    proved: StackFrameStruct[];
    remainingHash: BytesLike;
};
export type StackFrameWindowStructOutput = [
    StackFrameStructOutput[],
    string
] & {
    proved: StackFrameStructOutput[];
    remainingHash: string;
};
export type MachineStruct = {
    status: BigNumberish;
    valueStack: ValueStackStruct;
    internalStack: ValueStackStruct;
    frameStack: StackFrameWindowStruct;
    globalStateHash: BytesLike;
    moduleIdx: BigNumberish;
    functionIdx: BigNumberish;
    functionPc: BigNumberish;
    modulesRoot: BytesLike;
};
export type MachineStructOutput = [
    number,
    ValueStackStructOutput,
    ValueStackStructOutput,
    StackFrameWindowStructOutput,
    string,
    number,
    number,
    number,
    string
] & {
    status: number;
    valueStack: ValueStackStructOutput;
    internalStack: ValueStackStructOutput;
    frameStack: StackFrameWindowStructOutput;
    globalStateHash: string;
    moduleIdx: number;
    functionIdx: number;
    functionPc: number;
    modulesRoot: string;
};
export type ModuleMemoryStruct = {
    size: BigNumberish;
    maxSize: BigNumberish;
    merkleRoot: BytesLike;
};
export type ModuleMemoryStructOutput = [BigNumber, BigNumber, string] & {
    size: BigNumber;
    maxSize: BigNumber;
    merkleRoot: string;
};
export type ModuleStruct = {
    globalsMerkleRoot: BytesLike;
    moduleMemory: ModuleMemoryStruct;
    tablesMerkleRoot: BytesLike;
    functionsMerkleRoot: BytesLike;
    internalsOffset: BigNumberish;
};
export type ModuleStructOutput = [
    string,
    ModuleMemoryStructOutput,
    string,
    string,
    number
] & {
    globalsMerkleRoot: string;
    moduleMemory: ModuleMemoryStructOutput;
    tablesMerkleRoot: string;
    functionsMerkleRoot: string;
    internalsOffset: number;
};
export type InstructionStruct = {
    opcode: BigNumberish;
    argumentData: BigNumberish;
};
export type InstructionStructOutput = [number, BigNumber] & {
    opcode: number;
    argumentData: BigNumber;
};
export interface OneStepProverMemoryInterface extends utils.Interface {
    contractName: "OneStepProverMemory";
    functions: {
        "executeOneStep((uint256,address),(uint8,(((uint8,uint256)[]),bytes32),(((uint8,uint256)[]),bytes32),(((uint8,uint256),bytes32,uint32,uint32)[],bytes32),bytes32,uint32,uint32,uint32,bytes32),(bytes32,(uint64,uint64,bytes32),bytes32,bytes32,uint32),(uint16,uint256),bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "executeOneStep", values: [
        ExecutionContextStruct,
        MachineStruct,
        ModuleStruct,
        InstructionStruct,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "executeOneStep", data: BytesLike): Result;
    events: {};
}
export interface OneStepProverMemory extends BaseContract {
    contractName: "OneStepProverMemory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OneStepProverMemoryInterface;
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
        executeOneStep(arg0: ExecutionContextStruct, startMach: MachineStruct, startMod: ModuleStruct, inst: InstructionStruct, proof: BytesLike, overrides?: CallOverrides): Promise<[
            MachineStructOutput,
            ModuleStructOutput
        ] & {
            mach: MachineStructOutput;
            mod: ModuleStructOutput;
        }>;
    };
    executeOneStep(arg0: ExecutionContextStruct, startMach: MachineStruct, startMod: ModuleStruct, inst: InstructionStruct, proof: BytesLike, overrides?: CallOverrides): Promise<[
        MachineStructOutput,
        ModuleStructOutput
    ] & {
        mach: MachineStructOutput;
        mod: ModuleStructOutput;
    }>;
    callStatic: {
        executeOneStep(arg0: ExecutionContextStruct, startMach: MachineStruct, startMod: ModuleStruct, inst: InstructionStruct, proof: BytesLike, overrides?: CallOverrides): Promise<[
            MachineStructOutput,
            ModuleStructOutput
        ] & {
            mach: MachineStructOutput;
            mod: ModuleStructOutput;
        }>;
    };
    filters: {};
    estimateGas: {
        executeOneStep(arg0: ExecutionContextStruct, startMach: MachineStruct, startMod: ModuleStruct, inst: InstructionStruct, proof: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        executeOneStep(arg0: ExecutionContextStruct, startMach: MachineStruct, startMod: ModuleStruct, inst: InstructionStruct, proof: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L1ForceOnlyReverseCustomGatewayInterface extends utils.Interface {
    contractName: "L1ForceOnlyReverseCustomGateway";
    functions: {
        "calculateL2TokenAddress(address)": FunctionFragment;
        "counterpartGateway()": FunctionFragment;
        "encodeWithdrawal(uint256,address)": FunctionFragment;
        "finalizeInboundTransfer(address,address,address,uint256,bytes)": FunctionFragment;
        "forceRegisterTokenToL2(address[],address[],uint256,uint256,uint256)": FunctionFragment;
        "getExternalCall(uint256,address,bytes)": FunctionFragment;
        "getOutboundCalldata(address,address,address,uint256,bytes)": FunctionFragment;
        "inbox()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "l1ToL2Token(address)": FunctionFragment;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "outboundTransferCustomRefund(address,address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "postUpgradeInit()": FunctionFragment;
        "redirectedExits(bytes32)": FunctionFragment;
        "registerTokenToL2(address,uint256,uint256,uint256,address)": FunctionFragment;
        "router()": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferExitAndCall(uint256,address,address,bytes,bytes)": FunctionFragment;
        "whitelist()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "counterpartGateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "encodeWithdrawal", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "finalizeInboundTransfer", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "forceRegisterTokenToL2", values: [string[], string[], BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getExternalCall", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getOutboundCalldata", values: [string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "l1ToL2Token", values: [string]): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "outboundTransferCustomRefund", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "postUpgradeInit", values?: undefined): string;
    encodeFunctionData(functionFragment: "redirectedExits", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "registerTokenToL2", values: [string, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transferExitAndCall", values: [BigNumberish, string, string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "counterpartGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeInboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceRegisterTokenToL2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOutboundCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1ToL2Token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransferCustomRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postUpgradeInit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redirectedExits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerTokenToL2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferExitAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "DepositInitiated(address,address,address,uint256,uint256)": EventFragment;
        "TokenSet(address,address)": EventFragment;
        "TxToL2(address,address,uint256,bytes)": EventFragment;
        "WithdrawRedirected(address,address,uint256,bytes,bytes,bool)": EventFragment;
        "WithdrawalFinalized(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositInitiated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TxToL2"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawRedirected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalFinalized"): EventFragment;
}
export type DepositInitiatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    l1Token: string;
    _from: string;
    _to: string;
    _sequenceNumber: BigNumber;
    _amount: BigNumber;
}>;
export type DepositInitiatedEventFilter = TypedEventFilter<DepositInitiatedEvent>;
export type TokenSetEvent = TypedEvent<[
    string,
    string
], {
    l1Address: string;
    l2Address: string;
}>;
export type TokenSetEventFilter = TypedEventFilter<TokenSetEvent>;
export type TxToL2Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    _from: string;
    _to: string;
    _seqNum: BigNumber;
    _data: string;
}>;
export type TxToL2EventFilter = TypedEventFilter<TxToL2Event>;
export type WithdrawRedirectedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string,
    boolean
], {
    from: string;
    to: string;
    exitNum: BigNumber;
    newData: string;
    data: string;
    madeExternalCall: boolean;
}>;
export type WithdrawRedirectedEventFilter = TypedEventFilter<WithdrawRedirectedEvent>;
export type WithdrawalFinalizedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    l1Token: string;
    _from: string;
    _to: string;
    _exitNum: BigNumber;
    _amount: BigNumber;
}>;
export type WithdrawalFinalizedEventFilter = TypedEventFilter<WithdrawalFinalizedEvent>;
export interface L1ForceOnlyReverseCustomGateway extends BaseContract {
    contractName: "L1ForceOnlyReverseCustomGateway";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1ForceOnlyReverseCustomGatewayInterface;
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
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<[string]>;
        counterpartGateway(overrides?: CallOverrides): Promise<[string]>;
        encodeWithdrawal(_exitNum: BigNumberish, _initialDestination: string, overrides?: CallOverrides): Promise<[string]>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        forceRegisterTokenToL2(_l1Addresses: string[], _l2Addresses: string[], _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getExternalCall(_exitNum: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            target: string;
            data: string;
        }>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            outboundCalldata: string;
        }>;
        inbox(overrides?: CallOverrides): Promise<[string]>;
        initialize(_l1Counterpart: string, _l1Router: string, _inbox: string, _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            string
        ] & {
            isExit: boolean;
            _newTo: string;
            _newData: string;
        }>;
        "registerTokenToL2(address,uint256,uint256,uint256,address)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "registerTokenToL2(address,uint256,uint256,uint256)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transferExitAndCall(_exitNum: BigNumberish, _initialDestination: string, _newDestination: string, _newData: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelist(overrides?: CallOverrides): Promise<[string]>;
    };
    calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
    counterpartGateway(overrides?: CallOverrides): Promise<string>;
    encodeWithdrawal(_exitNum: BigNumberish, _initialDestination: string, overrides?: CallOverrides): Promise<string>;
    finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    forceRegisterTokenToL2(_l1Addresses: string[], _l2Addresses: string[], _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getExternalCall(_exitNum: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        target: string;
        data: string;
    }>;
    getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    inbox(overrides?: CallOverrides): Promise<string>;
    initialize(_l1Counterpart: string, _l1Router: string, _inbox: string, _owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<string>;
    outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    postUpgradeInit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<[
        boolean,
        string,
        string
    ] & {
        isExit: boolean;
        _newTo: string;
        _newData: string;
    }>;
    "registerTokenToL2(address,uint256,uint256,uint256,address)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "registerTokenToL2(address,uint256,uint256,uint256)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    setOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferExitAndCall(_exitNum: BigNumberish, _initialDestination: string, _newDestination: string, _newData: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelist(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<string>;
        counterpartGateway(overrides?: CallOverrides): Promise<string>;
        encodeWithdrawal(_exitNum: BigNumberish, _initialDestination: string, overrides?: CallOverrides): Promise<string>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        forceRegisterTokenToL2(_l1Addresses: string[], _l2Addresses: string[], _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getExternalCall(_exitNum: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            target: string;
            data: string;
        }>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        inbox(overrides?: CallOverrides): Promise<string>;
        initialize(_l1Counterpart: string, _l1Router: string, _inbox: string, _owner: string, overrides?: CallOverrides): Promise<void>;
        l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<string>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        postUpgradeInit(overrides?: CallOverrides): Promise<void>;
        redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            string
        ] & {
            isExit: boolean;
            _newTo: string;
            _newData: string;
        }>;
        "registerTokenToL2(address,uint256,uint256,uint256,address)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        "registerTokenToL2(address,uint256,uint256,uint256)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<string>;
        setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferExitAndCall(_exitNum: BigNumberish, _initialDestination: string, _newDestination: string, _newData: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        whitelist(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DepositInitiated(address,address,address,uint256,uint256)"(l1Token?: null, _from?: string | null, _to?: string | null, _sequenceNumber?: BigNumberish | null, _amount?: null): DepositInitiatedEventFilter;
        DepositInitiated(l1Token?: null, _from?: string | null, _to?: string | null, _sequenceNumber?: BigNumberish | null, _amount?: null): DepositInitiatedEventFilter;
        "TokenSet(address,address)"(l1Address?: string | null, l2Address?: string | null): TokenSetEventFilter;
        TokenSet(l1Address?: string | null, l2Address?: string | null): TokenSetEventFilter;
        "TxToL2(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
        TxToL2(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
        "WithdrawRedirected(address,address,uint256,bytes,bytes,bool)"(from?: string | null, to?: string | null, exitNum?: BigNumberish | null, newData?: null, data?: null, madeExternalCall?: null): WithdrawRedirectedEventFilter;
        WithdrawRedirected(from?: string | null, to?: string | null, exitNum?: BigNumberish | null, newData?: null, data?: null, madeExternalCall?: null): WithdrawRedirectedEventFilter;
        "WithdrawalFinalized(address,address,address,uint256,uint256)"(l1Token?: null, _from?: string | null, _to?: string | null, _exitNum?: BigNumberish | null, _amount?: null): WithdrawalFinalizedEventFilter;
        WithdrawalFinalized(l1Token?: null, _from?: string | null, _to?: string | null, _exitNum?: BigNumberish | null, _amount?: null): WithdrawalFinalizedEventFilter;
    };
    estimateGas: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<BigNumber>;
        counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>;
        encodeWithdrawal(_exitNum: BigNumberish, _initialDestination: string, overrides?: CallOverrides): Promise<BigNumber>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        forceRegisterTokenToL2(_l1Addresses: string[], _l2Addresses: string[], _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getExternalCall(_exitNum: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        inbox(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_l1Counterpart: string, _l1Router: string, _inbox: string, _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "registerTokenToL2(address,uint256,uint256,uint256,address)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "registerTokenToL2(address,uint256,uint256,uint256)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferExitAndCall(_exitNum: BigNumberish, _initialDestination: string, _newDestination: string, _newData: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelist(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateL2TokenAddress(l1ERC20: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeWithdrawal(_exitNum: BigNumberish, _initialDestination: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        finalizeInboundTransfer(_token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        forceRegisterTokenToL2(_l1Addresses: string[], _l2Addresses: string[], _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getExternalCall(_exitNum: BigNumberish, _initialDestination: string, _initialData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOutboundCalldata(_l1Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_l1Counterpart: string, _l1Router: string, _inbox: string, _owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        l1ToL2Token(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outboundTransfer(_l1Token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        outboundTransferCustomRefund(_l1Token: string, _refundTo: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postUpgradeInit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "registerTokenToL2(address,uint256,uint256,uint256,address)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, _creditBackAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "registerTokenToL2(address,uint256,uint256,uint256)"(_l2Address: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _maxSubmissionCost: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferExitAndCall(_exitNum: BigNumberish, _initialDestination: string, _newDestination: string, _newData: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

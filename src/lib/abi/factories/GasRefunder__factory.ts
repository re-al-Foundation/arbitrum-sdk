/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GasRefunder, GasRefunderInterface } from "../GasRefunder";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum GasRefunder.CommonParameterKey",
        name: "parameter",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "CommonParameterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "ContractAllowedSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "DisallowerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "refundee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum GasRefunder.RefundDenyReason",
        name: "reason",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "RefundGasCostsDenied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "refundee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPaid",
        type: "uint256",
      },
    ],
    name: "RefundedGasCosts",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "RefundeeAllowedSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "allowContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "allowRefundees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowedContracts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowedRefundees",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "commonParams",
    outputs: [
      {
        internalType: "uint128",
        name: "maxRefundeeBalance",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "extraGasMargin",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "calldataCost",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "maxGasTip",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "maxGasCost",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "maxSingleGasUsage",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "disallowContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "disallowRefundees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disallower",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "refundee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "calldataSize",
        type: "uint256",
      },
    ],
    name: "onGasSpent",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "newValue",
        type: "uint8",
      },
    ],
    name: "setCalldataCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "setDisallower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newValue",
        type: "uint32",
      },
    ],
    name: "setExtraGasMargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newValue",
        type: "uint64",
      },
    ],
    name: "setMaxGasCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "newValue",
        type: "uint64",
      },
    ],
    name: "setMaxGasTip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "newValue",
        type: "uint128",
      },
    ],
    name: "setMaxRefundeeBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newValue",
        type: "uint32",
      },
    ],
    name: "setMaxSingleGasUsage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a336100a5565b6040805160c08101825260008152610fa06020820152600c9181019190915263773594006060820152641bf08eb0006080820152621e848060a090910152600480546001600160e81b03191678773594000c00000fa000000000000000000000000000000000179055600580546001600160601b0319166a1e84800000001bf08eb0001790556100f5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6111e7806101046000396000f3fe6080604052600436106101235760003560e01c8063ca101295116100a0578063efe12b0111610064578063efe12b011461040d578063f1e845ca1461042d578063f2fde38b1461044d578063f3fef3a31461046d578063f52128eb1461048d57600080fd5b8063ca101295146102e0578063cd499da314610300578063d513894814610320578063e3db8a49146103cd578063e5207453146103ed57600080fd5b80637edddf45116100e75780637edddf451461022357806386b98895146102435780638da5cb5b14610263578063a89d217314610290578063bffe1780146102c057600080fd5b806325416bc9146101675780632ccb03f214610189578063500de431146101a957806351e0e26b146101c9578063715018a61461020e57600080fd5b3661016257604080513381523460208201527f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4910160405180910390a1005b600080fd5b34801561017357600080fd5b50610187610182366004610efd565b6104ad565b005b34801561019557600080fd5b506101876101a4366004610f71565b6104f5565b3480156101b557600080fd5b506101876101c4366004610f9a565b610571565b3480156101d557600080fd5b506101f96101e4366004610fd5565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561021a57600080fd5b506101876105e3565b34801561022f57600080fd5b5061018761023e366004610f9a565b61061e565b34801561024f57600080fd5b5061018761025e366004610f71565b610672565b34801561026f57600080fd5b506102786106cd565b6040516001600160a01b039091168152602001610205565b34801561029c57600080fd5b506101f96102ab366004610fd5565b60026020526000908152604090205460ff1681565b3480156102cc57600080fd5b506101876102db366004610ff2565b6106dc565b3480156102ec57600080fd5b506101876102fb366004610efd565b610746565b34801561030c57600080fd5b5061018761031b366004610efd565b610781565b34801561032c57600080fd5b5060045460055461037f916001600160801b0381169163ffffffff600160801b830481169260ff600160a01b820416926001600160401b03600160a81b90920482169291811691600160401b9091041686565b604080516001600160801b03909716875263ffffffff958616602088015260ff909416938601939093526001600160401b0391821660608601521660808401521660a082015260c001610205565b3480156103d957600080fd5b506101f96103e8366004611015565b6107da565b3480156103f957600080fd5b50610187610408366004610efd565b610a7e565b34801561041957600080fd5b50600354610278906001600160a01b031681565b34801561043957600080fd5b50610187610448366004610fd5565b610ad7565b34801561045957600080fd5b50610187610468366004610fd5565b610b50565b34801561047957600080fd5b5061018761048836600461104a565b610bf0565b34801561049957600080fd5b506101876104a8366004611076565b610d02565b336104b66106cd565b6001600160a01b0316146104e55760405162461bcd60e51b81526004016104dc9061109f565b60405180910390fd5b6104f182826001610d75565b5050565b336104fe6106cd565b6001600160a01b0316146105245760405162461bcd60e51b81526004016104dc9061109f565b6005805467ffffffffffffffff19166001600160401b03831617905560045b6040516001600160401b0383168152600080516020611192833981519152906020015b60405180910390a250565b3361057a6106cd565b6001600160a01b0316146105a05760405162461bcd60e51b81526004016104dc9061109f565b6005805463ffffffff60401b1916600160401b63ffffffff8416021781555b60405163ffffffff8316815260008051602061119283398151915290602001610566565b336105ec6106cd565b6001600160a01b0316146106125760405162461bcd60e51b81526004016104dc9061109f565b61061c6000610e14565b565b336106276106cd565b6001600160a01b03161461064d5760405162461bcd60e51b81526004016104dc9061109f565b6004805463ffffffff60801b1916600160801b63ffffffff84160217905560016105bf565b3361067b6106cd565b6001600160a01b0316146106a15760405162461bcd60e51b81526004016104dc9061109f565b6004805467ffffffffffffffff60a81b1916600160a81b6001600160401b038416021790556003610543565b6000546001600160a01b031690565b336106e56106cd565b6001600160a01b03161461070b5760405162461bcd60e51b81526004016104dc9061109f565b6004805460ff60a01b1916600160a01b60ff841602179055600260405160ff8316815260008051602061119283398151915290602001610566565b3361074f6106cd565b6001600160a01b0316146107755760405162461bcd60e51b81526004016104dc9061109f565b6104f182826001610e64565b6107896106cd565b6001600160a01b0316336001600160a01b031614806107b257506003546001600160a01b031633145b6107ce5760405162461bcd60e51b81526004016104dc906110d4565b6104f182826000610d75565b6000805a905047806108345760035b60405186815233906001600160a01b038916907f2b8ae00e22d9eaf5a92820a22b947c007aee773fa36502ad7a1c9a464ab4932b9060200160405180910390a4600092505050610a77565b3360009081526001602052604090205460ff166108525760006107e9565b6001600160a01b03861660009081526002602052604090205460ff166108795760016107e9565b60045460009061089990600160a81b90046001600160401b031648611112565b9050803a10156108a657503a5b6005546001600160401b0316158015906108ca57506005546001600160401b031681115b156108dd57506005546001600160401b03165b6004546005546001600160a01b03891631916001600160801b03811691600160401b900463ffffffff169061091c90600160a01b900460ff168961112a565b60045461093690600160801b900463ffffffff1688611112565b6109409190611112565b61094a908a611112565b98505a610957908a611149565b9850801580159061096757508089115b15610970578098505b600061097c8a8661112a565b905082158015906109955750826109938286611112565b115b156109bf57828411156109b2576000975050505050505050610a77565b6109bc8484611149565b90505b858111156109ca5750845b6040516001600160a01b038c16908290600081818185875af1925050503d8060008114610a13576040519150601f19603f3d011682016040523d82523d6000602084013e610a18565b606091505b5050604080518c8152602081018890529081018390529098508815159033906001600160a01b038e16907fd0224505f828ccfcbc56ca0590d97442e239a7aa770f712948fd6388356b20de9060600160405180910390a4505050505050505b9392505050565b610a866106cd565b6001600160a01b0316336001600160a01b03161480610aaf57506003546001600160a01b031633145b610acb5760405162461bcd60e51b81526004016104dc906110d4565b6104f182826000610e64565b33610ae06106cd565b6001600160a01b031614610b065760405162461bcd60e51b81526004016104dc9061109f565b600380546001600160a01b0319166001600160a01b0383169081179091556040517fc388cec0895ad7ee4635898ec92207ca48d42256d4355f7042efef62c368a97990600090a250565b33610b596106cd565b6001600160a01b031614610b7f5760405162461bcd60e51b81526004016104dc9061109f565b6001600160a01b038116610be45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104dc565b610bed81610e14565b50565b33610bf96106cd565b6001600160a01b031614610c1f5760405162461bcd60e51b81526004016104dc9061109f565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610c6c576040519150601f19603f3d011682016040523d82523d6000602084013e610c71565b606091505b5050905080610cb45760405162461bcd60e51b815260206004820152600f60248201526e15d2551211149055d7d19052531151608a1b60448201526064016104dc565b604080513381526001600160a01b03851660208201529081018390527fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb9060600160405180910390a1505050565b33610d0b6106cd565b6001600160a01b031614610d315760405162461bcd60e51b81526004016104dc9061109f565b600480546001600160801b0319166001600160801b03831617905560006040516001600160801b038316815260008051602061119283398151915290602001610566565b60005b82811015610e0e576000848483818110610d9457610d94611160565b9050602002016020810190610da99190610fd5565b6001600160a01b038116600081815260016020526040808220805460ff19168815159081179091559051939450927fb0918cd965657b8d231f8adba328fa810b6d61d800de9c795d40eb3623498c019190a35080610e0681611176565b915050610d78565b50505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b82811015610e0e576000848483818110610e8357610e83611160565b9050602002016020810190610e989190610fd5565b6001600160a01b038116600081815260026020526040808220805460ff19168815159081179091559051939450927ff544cca9d5484bfd447775bd759d12d53f1aa7c5f770be82c55070798ff9c63e9190a35080610ef581611176565b915050610e67565b60008060208385031215610f1057600080fd5b82356001600160401b0380821115610f2757600080fd5b818501915085601f830112610f3b57600080fd5b813581811115610f4a57600080fd5b8660208260051b8501011115610f5f57600080fd5b60209290920196919550909350505050565b600060208284031215610f8357600080fd5b81356001600160401b0381168114610a7757600080fd5b600060208284031215610fac57600080fd5b813563ffffffff81168114610a7757600080fd5b6001600160a01b0381168114610bed57600080fd5b600060208284031215610fe757600080fd5b8135610a7781610fc0565b60006020828403121561100457600080fd5b813560ff81168114610a7757600080fd5b60008060006060848603121561102a57600080fd5b833561103581610fc0565b95602085013595506040909401359392505050565b6000806040838503121561105d57600080fd5b823561106881610fc0565b946020939093013593505050565b60006020828403121561108857600080fd5b81356001600160801b0381168114610a7757600080fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600e908201526d1393d517d055551213d49256915160921b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115611125576111256110fc565b500190565b6000816000190483118215151615611144576111446110fc565b500290565b60008282101561115b5761115b6110fc565b500390565b634e487b7160e01b600052603260045260246000fd5b600060001982141561118a5761118a6110fc565b506001019056feda79b6b81f905f788560507c685a42d5a8ab209ee26538cbcf3ce3caed601f9ba26469706673582212206cc70f6b15f390ef56b4221aac8f3b9da9a0ea1e146ec0b9af3bf9885952126864736f6c63430008090033";

type GasRefunderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasRefunderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasRefunder__factory extends ContractFactory {
  constructor(...args: GasRefunderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GasRefunder";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GasRefunder> {
    return super.deploy(overrides || {}) as Promise<GasRefunder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GasRefunder {
    return super.attach(address) as GasRefunder;
  }
  connect(signer: Signer): GasRefunder__factory {
    return super.connect(signer) as GasRefunder__factory;
  }
  static readonly contractName: "GasRefunder";
  public readonly contractName: "GasRefunder";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasRefunderInterface {
    return new utils.Interface(_abi) as GasRefunderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasRefunder {
    return new Contract(address, _abi, signerOrProvider) as GasRefunder;
  }
}
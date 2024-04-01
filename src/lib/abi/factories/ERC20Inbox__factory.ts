/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Inbox, ERC20InboxInterface } from "../ERC20Inbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxDataSize",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dataLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDataLength",
        type: "uint256",
      },
    ],
    name: "DataTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "GasLimitTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "InsufficientSubmissionCost",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "InsufficientValue",
    type: "error",
  },
  {
    inputs: [],
    name: "L1Forked",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "origin",
        type: "address",
      },
    ],
    name: "NotAllowedOrigin",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOrigin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "rollup",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NotRollupOrOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "RetryableData",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "AllowListAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isEnabled",
        type: "bool",
      },
    ],
    name: "AllowListEnabledUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "InboxMessageDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
    ],
    name: "InboxMessageDeliveredFromOrigin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "allowListEnabled",
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
    name: "bridge",
    outputs: [
      {
        internalType: "contract IBridge",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "calculateRetryableSubmissionFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenTotalFeeAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createRetryableTicket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getProxyAdmin",
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
        internalType: "contract IBridge",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "contract ISequencerInbox",
        name: "_sequencerInbox",
        type: "address",
      },
    ],
    name: "initialize",
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
    name: "isAllowed",
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
    name: "maxDataSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "sendContractTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "messageData",
        type: "bytes",
      },
    ],
    name: "sendL2Message",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "messageData",
        type: "bytes",
      },
    ],
    name: "sendL2MessageFromOrigin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "sendUnsignedTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sequencerInbox",
    outputs: [
      {
        internalType: "contract ISequencerInbox",
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
        internalType: "address[]",
        name: "user",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "val",
        type: "bool[]",
      },
    ],
    name: "setAllowList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_allowListEnabled",
        type: "bool",
      },
    ],
    name: "setAllowListEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenTotalFeeAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "unsafeCreateRetryableTicket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052306080524660c05234801561001857600080fd5b5060405161244f38038061244f8339810160408190526100379161003f565b60a052610058565b60006020828403121561005157600080fd5b5051919050565b60805160a05160c0516123a56100aa600039600081816103820152610c4e0152600081816102ba015281816103e10152818161041d0152818161158c01526115cc0152600061069801526123a56000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063a66b327d116100ad578063e3de72a511610071578063e3de72a51461028f578063e78cea92146102a2578063e8eb1dc3146102b5578063ee35f327146102dc578063efeadb6d146102ef57600080fd5b8063a66b327d1461021d578063b75436bb14610233578063b79092fd14610246578063b9b9a68814610259578063babcc5391461026c57600080fd5b8063549e8426116100f4578063549e8426146101ab5780635c975abb146101be5780638456cb59146101c95780638a631aa6146101d15780638b3240a0146101e457600080fd5b80631fe927cf1461013157806322bd5c1c146101575780633f4ba83a1461017b578063485cc955146101855780635075788b14610198575b600080fd5b61014461013f366004611b8f565b610302565b6040519081526020015b60405180910390f35b60665461016b90600160a01b900460ff1681565b604051901515815260200161014e565b6101836104a5565b005b610183610193366004611be5565b6105e5565b6101446101a6366004611c1e565b610844565b6101446101b9366004611c9a565b610931565b60335460ff1661016b565b6101836109c6565b6101446101df366004611d49565b610b03565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b03165b60405161014e9190611dbb565b61014461022b366004611dcf565b600092915050565b610144610241366004611b8f565b610bd7565b610144610254366004611df1565b610cd4565b610144610267366004611c9a565b610db4565b61016b61027a366004611e0a565b60676020526000908152604090205460ff1681565b61018361029d366004611f12565b610e3a565b606554610210906001600160a01b031681565b6101447f000000000000000000000000000000000000000000000000000000000000000081565b606654610210906001600160a01b031681565b6101836102fd366004611fd3565b6110ba565b600061031060335460ff1690565b156103365760405162461bcd60e51b815260040161032d90611ff0565b60405180910390fd5b606654600160a01b900460ff16801561035f57503260009081526067602052604090205460ff16155b1561037f5732604051630f51ed7160e41b815260040161032d9190611dbb565b467f0000000000000000000000000000000000000000000000000000000000000000146103bf5760405163c6ea680360e01b815260040160405180910390fd5b3332146103df5760405163feb3d07160e01b815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000082111561044957604051634634691b60e01b8152600481018390527f0000000000000000000000000000000000000000000000000000000000000000602482015260440161032d565b6000610470600333868660405161046192919061201a565b60405180910390206000611299565b60405190915081907fab532385be8f1005a4b6ba8fa20a2245facb346134ac739fe9a5198dc1580b9c90600090a29392505050565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b1580156104ea57600080fd5b505afa1580156104fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610522919061202a565b9050336001600160a01b038216146105da576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561056f57600080fd5b505afa158015610583573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a7919061202a565b9050336001600160a01b038216146105d857338282604051630739600760e01b815260040161032d93929190612047565b505b6105e261147e565b50565b600054610100900460ff166106005760005460ff1615610608565b61060861150b565b61066b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161032d565b600054610100900460ff1615801561068d576000805461ffff19166101011790555b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561071b5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161032d565b610725838361151c565b60655460408051631c2eb17b60e31b815290516000926001600160a01b03169163e1758bd8916004808301926020929190829003018186803b15801561076a57600080fd5b505afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a2919061202a565b60655460405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291925082169063095ea7b390604401602060405180830381600087803b1580156107f357600080fd5b505af1158015610807573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082b919061206a565b5050801561083f576000805461ff00191690555b505050565b600061085260335460ff1690565b1561086f5760405162461bcd60e51b815260040161032d90611ff0565b606654600160a01b900460ff16801561089857503260009081526067602052604090205460ff16155b156108b85732604051630f51ed7160e41b815260040161032d9190611dbb565b6001600160401b038811156108e05760405163107c527b60e01b815260040160405180910390fd5b61092560033360008b8b8b8b6001600160a01b03168b8b8b60405160200161090f989796959493929190612087565b6040516020818303038152906040526000611588565b98975050505050505050565b600061093f60335460ff1690565b1561095c5760405162461bcd60e51b815260040161032d90611ff0565b606654600160a01b900460ff16801561098557503260009081526067602052604090205460ff16155b156109a55732604051630f51ed7160e41b815260040161032d9190611dbb565b6109b78b8b8b8b8b8b8b8b8b8b611650565b9b9a5050505050505050505050565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b158015610a0b57600080fd5b505afa158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a43919061202a565b9050336001600160a01b03821614610afb576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a9057600080fd5b505afa158015610aa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac8919061202a565b9050336001600160a01b03821614610af957338282604051630739600760e01b815260040161032d93929190612047565b505b6105e2611704565b6000610b1160335460ff1690565b15610b2e5760405162461bcd60e51b815260040161032d90611ff0565b606654600160a01b900460ff168015610b5757503260009081526067602052604090205460ff16155b15610b775732604051630f51ed7160e41b815260040161032d9190611dbb565b6001600160401b03871115610b9f5760405163107c527b60e01b815260040160405180910390fd5b610bcc60033360018a8a8a6001600160a01b03168a8a8a60405160200161090f97969594939291906120cd565b979650505050505050565b6000610be560335460ff1690565b15610c025760405162461bcd60e51b815260040161032d90611ff0565b606654600160a01b900460ff168015610c2b57503260009081526067602052604090205460ff16155b15610c4b5732604051630f51ed7160e41b815260040161032d9190611dbb565b467f000000000000000000000000000000000000000000000000000000000000000014610c8b5760405163c6ea680360e01b815260040160405180910390fd5b610ccd60033385858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509250611588915050565b9392505050565b6000610ce260335460ff1690565b15610cff5760405162461bcd60e51b815260040161032d90611ff0565b606654600160a01b900460ff168015610d2857503260009081526067602052604090205460ff16155b15610d485732604051630f51ed7160e41b815260040161032d9190611dbb565b33610d528161175c565b80610d5d5750323314155b15610d7057503361111161111160901b01015b6040516bffffffffffffffffffffffff19606083901b16602082015260348101849052610ccd90600c90339060540160405160208183030381529060405286611588565b6000610dc260335460ff1690565b15610ddf5760405162461bcd60e51b815260040161032d90611ff0565b606654600160a01b900460ff168015610e0857503260009081526067602052604090205460ff16155b15610e285732604051630f51ed7160e41b815260040161032d9190611dbb565b6109b78b8b8b8b8b8b8b8b8b8b61176b565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b158015610e7f57600080fd5b505afa158015610e93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb7919061202a565b9050336001600160a01b03821614610f6f576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f0457600080fd5b505afa158015610f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3c919061202a565b9050336001600160a01b03821614610f6d57338282604051630739600760e01b815260040161032d93929190612047565b505b8151835114610fb05760405162461bcd60e51b815260206004820152600d60248201526c1253959053125117d253941555609a1b604482015260640161032d565b60005b83518110156110b457828181518110610fce57610fce61210c565b602002602001015160676000868481518110610fec57610fec61210c565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff02191690831515021790555083818151811061103d5761103d61210c565b60200260200101516001600160a01b03167fd9739f45a01ce092c5cdb3d68f63d63d21676b1c6c0b4f9cbc6be4cf5449595a8483815181106110815761108161210c565b602002602001015160405161109a911515815260200190565b60405180910390a2806110ac81612138565b915050610fb3565b50505050565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b1580156110ff57600080fd5b505afa158015611113573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611137919061202a565b9050336001600160a01b038216146111ef576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561118457600080fd5b505afa158015611198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111bc919061202a565b9050336001600160a01b038216146111ed57338282604051630739600760e01b815260040161032d93929190612047565b505b606660149054906101000a900460ff16151582151514156112405760405162461bcd60e51b815260206004820152600b60248201526a1053149150511657d4d15560aa1b604482015260640161032d565b60668054831515600160a01b0260ff60a01b199091161790556040517f16435b45f7482047f839a6a19d291442627200f52cad2803c595150d0d440eb39061128d90841515815260200190565b60405180910390a15050565b600080606560009054906101000a90046001600160a01b03166001600160a01b031663e1758bd86040518163ffffffff1660e01b815260040160206040518083038186803b1580156112ea57600080fd5b505afa1580156112fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611322919061202a565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016113529190611dbb565b60206040518083038186803b15801561136a57600080fd5b505afa15801561137e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a29190612153565b9050838110156113d15760006113b8828661216c565b90506113cf6001600160a01b038416333084611848565b505b6065546001600160a01b03166375d81e258861111161111160901b0189016040516001600160e01b031960e085901b16815260ff90921660048301526001600160a01b031660248201526044810188905260648101879052608401602060405180830381600087803b15801561144657600080fd5b505af115801561145a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcc9190612153565b60335460ff166114c75760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161032d565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516115019190611dbb565b60405180910390a1565b60006115163061175c565b15905090565b600054610100900460ff166115435760405162461bcd60e51b815260040161032d90612183565b606580546001600160a01b038085166001600160a01b031990921691909117909155606680546001600160a81b0319169183169190911790556115846118a2565b5050565b60007f0000000000000000000000000000000000000000000000000000000000000000835111156115f8578251604051634634691b60e01b815260048101919091527f0000000000000000000000000000000000000000000000000000000000000000602482015260440161032d565b600061160d8686868051906020012086611299565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b8560405161163f9190612226565b60405180910390a295945050505050565b600061165c8587612239565b6116668b8b612258565b6116709190612258565b8410156116b9576116818587612239565b61168b8b8b612258565b6116959190612258565b604051631c102d6360e21b815260048101919091526024810185905260440161032d565b6116c28861175c565b156116d65761111161111160901b01880197505b6116df8761175c565b15610e285761111161111160901b01870196506109b78b8b8b8b8b8b8b8b8b8b61176b565b60335460ff16156117275760405162461bcd60e51b815260040161032d90611ff0565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586114f43390565b6001600160a01b03163b151590565b6000856001148061177c5750846001145b156117b057338b8b868c8c8c8c8c8b8b6040516307c266e360e01b815260040161032d9b9a99989796959493929190612270565b6001600160401b038611156117d85760405163107c527b60e01b815260040160405180910390fd5b60006118386009338e6001600160a01b03168e898f8f6001600160a01b03168f6001600160a01b03168f8f8e8e90508f8f6040516020016118239b9a999897969594939291906122f9565b60405160208183030381529060405288611588565b9c9b505050505050505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110b49085906118d3565b600054610100900460ff166118c95760405162461bcd60e51b815260040161032d90612183565b6118d16119a5565b565b6000611928826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119d89092919063ffffffff16565b80519091501561083f5780806020019051810190611946919061206a565b61083f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161032d565b600054610100900460ff166119cc5760405162461bcd60e51b815260040161032d90612183565b6033805460ff19169055565b60606119e784846000856119ef565b949350505050565b606082471015611a505760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161032d565b611a598561175c565b611aa55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161032d565b600080866001600160a01b03168587604051611ac19190612353565b60006040518083038185875af1925050503d8060008114611afe576040519150601f19603f3d011682016040523d82523d6000602084013e611b03565b606091505b5091509150610bcc82828660608315611b1d575081610ccd565b825115611b2d5782518084602001fd5b8160405162461bcd60e51b815260040161032d9190612226565b60008083601f840112611b5957600080fd5b5081356001600160401b03811115611b7057600080fd5b602083019150836020828501011115611b8857600080fd5b9250929050565b60008060208385031215611ba257600080fd5b82356001600160401b03811115611bb857600080fd5b611bc485828601611b47565b90969095509350505050565b6001600160a01b03811681146105e257600080fd5b60008060408385031215611bf857600080fd5b8235611c0381611bd0565b91506020830135611c1381611bd0565b809150509250929050565b600080600080600080600060c0888a031215611c3957600080fd5b8735965060208801359550604088013594506060880135611c5981611bd0565b93506080880135925060a08801356001600160401b03811115611c7b57600080fd5b611c878a828b01611b47565b989b979a50959850939692959293505050565b6000806000806000806000806000806101208b8d031215611cba57600080fd5b8a35611cc581611bd0565b995060208b0135985060408b0135975060608b0135611ce381611bd0565b965060808b0135611cf381611bd0565b955060a08b0135945060c08b0135935060e08b013592506101008b01356001600160401b03811115611d2457600080fd5b611d308d828e01611b47565b915080935050809150509295989b9194979a5092959850565b60008060008060008060a08789031215611d6257600080fd5b86359550602087013594506040870135611d7b81611bd0565b93506060870135925060808701356001600160401b03811115611d9d57600080fd5b611da989828a01611b47565b979a9699509497509295939492505050565b6001600160a01b0391909116815260200190565b60008060408385031215611de257600080fd5b50508035926020909101359150565b600060208284031215611e0357600080fd5b5035919050565b600060208284031215611e1c57600080fd5b8135610ccd81611bd0565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611e6557611e65611e27565b604052919050565b60006001600160401b03821115611e8657611e86611e27565b5060051b60200190565b80151581146105e257600080fd5b600082601f830112611eaf57600080fd5b81356020611ec4611ebf83611e6d565b611e3d565b82815260059290921b84018101918181019086841115611ee357600080fd5b8286015b84811015611f07578035611efa81611e90565b8352918301918301611ee7565b509695505050505050565b60008060408385031215611f2557600080fd5b82356001600160401b0380821115611f3c57600080fd5b818501915085601f830112611f5057600080fd5b81356020611f60611ebf83611e6d565b82815260059290921b84018101918181019089841115611f7f57600080fd5b948201945b83861015611fa6578535611f9781611bd0565b82529482019490820190611f84565b96505086013592505080821115611fbc57600080fd5b50611fc985828601611e9e565b9150509250929050565b600060208284031215611fe557600080fd5b8135610ccd81611e90565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b8183823760009101908152919050565b60006020828403121561203c57600080fd5b8151610ccd81611bd0565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60006020828403121561207c57600080fd5b8151610ccd81611e90565b60ff60f81b8960f81b168152876001820152866021820152856041820152846061820152836081820152818360a18301376000910160a101908152979650505050505050565b60ff60f81b8860f81b16815286600182015285602182015284604182015283606182015281836081830137600091016081019081529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561214c5761214c612122565b5060010190565b60006020828403121561216557600080fd5b5051919050565b60008282101561217e5761217e612122565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b838110156121e95781810151838201526020016121d1565b838111156110b45750506000910152565b600081518084526122128160208601602086016121ce565b601f01601f19169290920160200192915050565b602081526000610ccd60208301846121fa565b600081600019048311821515161561225357612253612122565b500290565b6000821982111561226b5761226b612122565b500190565b6001600160a01b038c811682528b81166020830152604082018b9052606082018a90526080820189905287811660a0830152861660c082015260e0810185905261010081018490526101406101208201819052810182905260006101608385828501376000838501820152601f909301601f19169091019091019b9a5050505050505050505050565b8b81528a60208201528960408201528860608201528760808201528660a08201528560c08201528460e08201528361010082015260006101208385828501376000929093019092019081529b9a5050505050505050505050565b600082516123658184602087016121ce565b919091019291505056fea2646970667358221220461ed5b89db5608c1ea62ff3a70317b28240285dcf06730c47fcfd5930e72deb64736f6c63430008090033";

type ERC20InboxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20InboxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Inbox__factory extends ContractFactory {
  constructor(...args: ERC20InboxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Inbox";
  }

  deploy(
    _maxDataSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Inbox> {
    return super.deploy(_maxDataSize, overrides || {}) as Promise<ERC20Inbox>;
  }
  getDeployTransaction(
    _maxDataSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_maxDataSize, overrides || {});
  }
  attach(address: string): ERC20Inbox {
    return super.attach(address) as ERC20Inbox;
  }
  connect(signer: Signer): ERC20Inbox__factory {
    return super.connect(signer) as ERC20Inbox__factory;
  }
  static readonly contractName: "ERC20Inbox";
  public readonly contractName: "ERC20Inbox";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20InboxInterface {
    return new utils.Interface(_abi) as ERC20InboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Inbox {
    return new Contract(address, _abi, signerOrProvider) as ERC20Inbox;
  }
}
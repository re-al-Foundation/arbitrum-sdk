/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestWETH9, TestWETH9Interface } from "../TestWETH9";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e4038038062000e40833981016040819052620000349162000123565b818160036200004483826200021c565b5060046200005382826200021c565b5050505050620002e8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b81604052838152602092508683858801011115620000eb57600080fd5b600091505b838210156200010f5785820183015181830184015290820190620000f0565b600093810190920192909252949350505050565b600080604083850312156200013757600080fd5b82516001600160401b03808211156200014f57600080fd5b6200015d8683870162000074565b935060208501519150808211156200017457600080fd5b50620001838582860162000074565b9150509250929050565b600181811c90821680620001a257607f821691505b602082108103620001c357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021757600081815260208120601f850160051c81016020861015620001f25750805b601f850160051c820191505b818110156200021357828155600101620001fe565b5050505b505050565b81516001600160401b038111156200023857620002386200005e565b62000250816200024984546200018d565b84620001c9565b602080601f8311600181146200028857600084156200026f5750858301515b600019600386901b1c1916600185901b17855562000213565b600085815260208120601f198616915b82811015620002b95788860151825594840194600190910190840162000298565b5085821015620002d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610b4880620002f86000396000f3fe6080604052600436106100b25760003560e01c8063395093511161006f578063395093511461018f57806370a08231146101af57806395d89b41146101e5578063a457c2d7146101fa578063a9059cbb1461021a578063d0e30db01461023a578063dd62ed3e1461024257600080fd5b806306fdde03146100b7578063095ea7b3146100e257806318160ddd1461011257806323b872dd146101315780632e1a7d4d14610151578063313ce56714610173575b600080fd5b3480156100c357600080fd5b506100cc610262565b6040516100d99190610959565b60405180910390f35b3480156100ee57600080fd5b506101026100fd3660046109c3565b6102f4565b60405190151581526020016100d9565b34801561011e57600080fd5b506002545b6040519081526020016100d9565b34801561013d57600080fd5b5061010261014c3660046109ed565b61030e565b34801561015d57600080fd5b5061017161016c366004610a29565b610332565b005b34801561017f57600080fd5b50604051601281526020016100d9565b34801561019b57600080fd5b506101026101aa3660046109c3565b61036d565b3480156101bb57600080fd5b506101236101ca366004610a42565b6001600160a01b031660009081526020819052604090205490565b3480156101f157600080fd5b506100cc61038f565b34801561020657600080fd5b506101026102153660046109c3565b61039e565b34801561022657600080fd5b506101026102353660046109c3565b61041e565b61017161042c565b34801561024e57600080fd5b5061012361025d366004610a64565b610438565b60606003805461027190610a97565b80601f016020809104026020016040519081016040528092919081815260200182805461029d90610a97565b80156102ea5780601f106102bf576101008083540402835291602001916102ea565b820191906000526020600020905b8154815290600101906020018083116102cd57829003601f168201915b5050505050905090565b600033610302818585610463565b60019150505b92915050565b60003361031c858285610588565b610327858585610602565b506001949350505050565b61033c3382610794565b604051339082156108fc029083906000818181858888f19350505050158015610369573d6000803e3d6000fd5b5050565b6000336103028185856103808383610438565b61038a9190610ad1565b610463565b60606004805461027190610a97565b600033816103ac8286610438565b9050838110156104115760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103278286868403610463565b600033610302818585610602565b61043633346108ac565b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104c55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610408565b6001600160a01b0382166105265760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610408565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006105948484610438565b905060001981146105fc57818110156105ef5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610408565b6105fc8484848403610463565b50505050565b6001600160a01b0383166106665760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610408565b6001600160a01b0382166106c85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610408565b6001600160a01b038316600090815260208190526040902054818110156107405760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610408565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020610af3833981519152910160405180910390a36105fc565b6001600160a01b0382166107f45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610408565b6001600160a01b038216600090815260208190526040902054818110156108685760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610408565b6001600160a01b038316600081815260208181526040808320868603905560028054879003905551858152919291600080516020610af3833981519152910161057b565b6001600160a01b0382166109025760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610408565b80600260008282546109149190610ad1565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020610af3833981519152910160405180910390a35050565b600060208083528351808285015260005b818110156109865785810183015185820160400152820161096a565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146109be57600080fd5b919050565b600080604083850312156109d657600080fd5b6109df836109a7565b946020939093013593505050565b600080600060608486031215610a0257600080fd5b610a0b846109a7565b9250610a19602085016109a7565b9150604084013590509250925092565b600060208284031215610a3b57600080fd5b5035919050565b600060208284031215610a5457600080fd5b610a5d826109a7565b9392505050565b60008060408385031215610a7757600080fd5b610a80836109a7565b9150610a8e602084016109a7565b90509250929050565b600181811c90821680610aab57607f821691505b602082108103610acb57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561030857634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220f429f1ca450b9a612168aa17132e55b2642dbfe2b2577071164c7375c117f4d864736f6c63430008100033";

type TestWETH9ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestWETH9ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestWETH9__factory extends ContractFactory {
  constructor(...args: TestWETH9ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TestWETH9";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestWETH9> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<TestWETH9>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): TestWETH9 {
    return super.attach(address) as TestWETH9;
  }
  connect(signer: Signer): TestWETH9__factory {
    return super.connect(signer) as TestWETH9__factory;
  }
  static readonly contractName: "TestWETH9";
  public readonly contractName: "TestWETH9";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestWETH9Interface {
    return new utils.Interface(_abi) as TestWETH9Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestWETH9 {
    return new Contract(address, _abi, signerOrProvider) as TestWETH9;
  }
}

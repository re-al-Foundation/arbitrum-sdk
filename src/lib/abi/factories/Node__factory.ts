/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Node, NodeInterface } from '../Node'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'addStaker',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'challengeHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'number',
        type: 'uint256',
      },
    ],
    name: 'childCreated',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'confirmData',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deadlineBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'destroy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'firstChildBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rollup',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_stateHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_challengeHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_confirmData',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_prev',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_deadlineBlock',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestChildNumber',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'newChildConfirmDeadline',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'noChildConfirmedBeforeBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'prev',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'removeStaker',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'requirePastChildConfirmDeadline',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'requirePastDeadline',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rollup',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakerCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'stakers',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stateHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506000805460ff1916600117905561084e8061002d6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806388d221c6116100ad578063a406b37411610071578063a406b37414610255578063cb23bcb514610299578063d7ff5e35146102bd578063dff69787146102c5578063f0dd77ff146102cd5761012c565b806388d221c6146101f15780639168ae72146101f957806396a9fdc01461021f57806397bdc51014610245578063a0369c141461024d5761012c565b80635b8b2280116100f45780635b8b2280146101a05780636971dfe5146101a85780636f791d29146101c5578063701da98e146101e157806383197ef0146101e95761012c565b80631bc09d0a146101315780632466696e146101505780632edfb42a146101885780633aa1927414610190578063479c925414610198575b600080fd5b61014e6004803603602081101561014757600080fd5b50356102d5565b005b6101766004803603602081101561016657600080fd5b50356001600160a01b0316610333565b60408051918252519081900360200190f35b610176610416565b61014e61041c565b610176610468565b61017661046e565b61014e600480360360208110156101be57600080fd5b5035610474565b6101cd6104c6565b604080519115158252519081900360200190f35b6101766104cf565b61014e6104d5565b61014e61052b565b6101cd6004803603602081101561020f57600080fd5b50356001600160a01b0316610574565b61014e6004803603602081101561023557600080fd5b50356001600160a01b0316610589565b61017661065b565b610176610661565b61014e600480360360c081101561026b57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a00135610667565b6102a161073a565b604080516001600160a01b039092168252519081900360200190f35b610176610749565b61017661074f565b610176610755565b6009546001600160a01b03163314610322576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b600a5461032e5743600a555b600b55565b6009546000906001600160a01b03163314610383576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b6001600160a01b03821660009081526008602052604090205460ff16156103e2576040805162461bcd60e51b815260206004820152600e60248201526d1053149150511657d4d51052d15160921b604482015290519081900360640190fd5b506001600160a01b03166000908152600860205260409020805460ff19166001908117909155600780549091019081905590565b60055481565b600654431015610466576040805162461bcd60e51b815260206004820152601060248201526f10d212531117d513d3d7d49150d1539560821b604482015290519081900360640190fd5b565b60045481565b60025481565b6009546001600160a01b031633146104c1576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b600655565b60005460ff1690565b60015481565b6009546001600160a01b03163314610522576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b6104663361075b565b600554431015610466576040805162461bcd60e51b815260206004820152600f60248201526e4245464f52455f444541444c494e4560881b604482015290519081900360640190fd5b60086020526000908152604090205460ff1681565b6009546001600160a01b031633146105d6576040805162461bcd60e51b815260206004820152600b60248201526a524f4c4c55505f4f4e4c5960a81b604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff16610630576040805162461bcd60e51b815260206004820152600a6024820152691393d517d4d51052d15160b21b604482015290519081900360640190fd5b6001600160a01b03166000908152600860205260409020805460ff1916905560078054600019019055565b60035481565b60065481565b6001600160a01b0386166106b0576040805162461bcd60e51b815260206004820152600b60248201526a2927a6262aa82fa0a2222960a91b604482015290519081900360640190fd5b6009546001600160a01b0316156106fd576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600980546001600160a01b0319166001600160a01b0397909716969096179095556001939093556002919091556003556004556005819055600655565b6009546001600160a01b031681565b600a5481565b60075481565b600b5481565b6000546040805180820190915260098152684e4f545f434c4f4e4560b81b60208201529060ff161561080b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107d05781810151838201526020016107b8565b50505050905090810190601f1680156107fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50806001600160a01b0316fffea26469706673582212203a8c6cd0754ce30fac0a025ae9bf8214862eb7455a8d97511f7a4245f8e3a11f64736f6c634300060b0033'

export class Node__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Node> {
    return super.deploy(overrides || {}) as Promise<Node>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Node {
    return super.attach(address) as Node
  }
  connect(signer: Signer): Node__factory {
    return super.connect(signer) as Node__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): NodeInterface {
    return new utils.Interface(_abi) as NodeInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Node {
    return new Contract(address, _abi, signerOrProvider) as Node
  }
}
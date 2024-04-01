/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestArbCustomTokenBurnFee,
  TestArbCustomTokenBurnFeeInterface,
} from "../TestArbCustomTokenBurnFee";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_l2Gateway",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l1Address",
        type: "address",
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Transfer",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bridgeBurn",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bridgeMint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "l1Address",
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
    name: "l2Gateway",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "someWackyCustomStuff",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "transferAndCall",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e4238038062001e4283398101604081905262000034916200051d565b60005482908290610100900460ff1615808015620000595750600054600160ff909116105b806200008957506200007630620001cf60201b620007011760201c565b15801562000089575060005460ff166001145b620000e15760405162461bcd60e51b815260206004820152602e602482015260008051602062001de283398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000105576000805461ff0019166101001790555b80156200013b576000805461ff00191690556040516001815260008051602062001e228339815191529060200160405180910390a15b5060cc80546001600160a01b038085166001600160a01b03199283161790925560cd805492841692909116919091179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b83820152620001c5929060129062000710620001de821b17901c565b50505050620006c6565b6001600160a01b03163b151590565b600054610100900460ff1615808015620001ff5750600054600160ff909116105b806200022f57506200021c30620001cf60201b620007011760201c565b1580156200022f575060005460ff166001145b620002835760405162461bcd60e51b815260206004820152602e602482015260008051602062001de283398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401620000d8565b6000805460ff191660011790558015620002a7576000805461ff0019166101001790555b620002b28462000309565b620002be848462000393565b6038805460ff191660ff8416179055801562000303576000805461ff00191690556040516001815260008051602062001e228339815191529060200160405180910390a15b50505050565b600054610100900460ff16620003655760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0283398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b6200039081604051806040016040528060018152602001603160f81b815250620003ff60201b60201c565b50565b600054610100900460ff16620003ef5760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0283398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b620003fb828262000475565b5050565b600054610100900460ff166200045b5760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0283398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b815160209283012081519190920120606591909155606655565b600054610100900460ff16620004d15760405162461bcd60e51b815260206004820152602b602482015260008051602062001e0283398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000d8565b6036620004df8382620005fa565b506037620004ee8282620005fa565b50506038805460ff1916601217905550565b80516001600160a01b03811681146200051857600080fd5b919050565b600080604083850312156200053157600080fd5b6200053c8362000500565b91506200054c6020840162000500565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200058057607f821691505b602082108103620005a157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620005f557600081815260208120601f850160051c81016020861015620005d05750805b601f850160051c820191505b81811015620005f157828155600101620005dc565b5050505b505050565b81516001600160401b0381111562000616576200061662000555565b6200062e816200062784546200056b565b84620005a7565b602080601f8311600181146200066657600084156200064d5750858301515b600019600386901b1c1916600185901b178555620005f1565b600085815260208120601f198616915b82811015620006975788860151825594840194600190910190840162000676565b5085821015620006b65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61170c80620006d66000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80637ecebe00116100ad578063a708acce11610071578063a708acce14610216578063a9059cbb14610284578063c2eeeebd14610297578063d505accf146102aa578063dd62ed3e146102bd57600080fd5b80637ecebe00146102185780638c2a993e1461022b5780638fa74a0e1461023e57806395d89b4114610269578063a457c2d71461027157600080fd5b80633644e515116100f45780633644e515146101ac57806339509351146101b45780634000aea0146101c757806370a08231146101da57806374f4f5471461020357600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b6101396102d0565b604051610146919061123b565b60405180910390f35b61016261015d366004611271565b610362565b6040519015158152602001610146565b6035545b604051908152602001610146565b61016261019236600461129b565b61037c565b60385460405160ff9091168152602001610146565b6101766103a0565b6101626101c2366004611271565b6103af565b6101626101d53660046112ed565b6103d1565b6101766101e83660046113b8565b6001600160a01b031660009081526033602052604090205490565b610216610211366004611271565b610447565b005b6101766102263660046113b8565b610488565b610216610239366004611271565b6104a6565b60cc54610251906001600160a01b031681565b6040516001600160a01b039091168152602001610146565b6101396104da565b61016261027f366004611271565b6104e9565b610162610292366004611271565b610564565b60cd54610251906001600160a01b031681565b6102166102b83660046113d3565b610572565b6101766102cb366004611446565b6106d6565b6060603680546102df90611479565b80601f016020809104026020016040519081016040528092919081815260200182805461030b90611479565b80156103585780601f1061032d57610100808354040283529160200191610358565b820191906000526020600020905b81548152906001019060200180831161033b57829003601f168201915b5050505050905090565b600033610370818585610845565b60019150505b92915050565b60003361038a858285610969565b6103958585856109dd565b506001949350505050565b60006103aa610b76565b905090565b6000336103708185856103c283836106d6565b6103cc91906114ad565b610845565b60006103dd8484610564565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040516104239291906114ce565b60405180910390a3833b1561043d5761043d848484610bf1565b5060019392505050565b60cc546001600160a01b0316331461047a5760405162461bcd60e51b8152600401610471906114ef565b60405180910390fd5b6104848282610c5b565b5050565b6001600160a01b038116600090815260996020526040812054610376565b60cc546001600160a01b031633146104d05760405162461bcd60e51b8152600401610471906114ef565b6104848282610c71565b6060603780546102df90611479565b600033816104f782866106d6565b9050838110156105575760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610471565b6103958286868403610845565b6000336103708185856109dd565b834211156105c25760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610471565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105f18c610d20565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061064c82610d48565b9050600061065c82878787610d96565b9050896001600160a01b0316816001600160a01b0316146106bf5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610471565b6106ca8a8a8a610845565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6001600160a01b03163b151590565b600054610100900460ff16158080156107305750600054600160ff909116105b80610751575061073f30610701565b158015610751575060005460ff166001145b6107b45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610471565b6000805460ff1916600117905580156107d7576000805461ff0019166101001790555b6107e084610dbe565b6107ea8484610e0b565b6038805460ff191660ff8416179055801561083f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6001600160a01b0383166108a75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610471565b6001600160a01b0382166109085760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610471565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061097584846106d6565b9050600019811461083f57818110156109d05760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610471565b61083f8484848403610845565b6001600160a01b038316610a415760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610471565b6001600160a01b038216610aa35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610471565b6001600160a01b03831660009081526033602052604090205481811015610b1b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610471565b6001600160a01b0380851660008181526033602052604080822086860390559286168082529083902080548601905591516000805160206116b783398151915290610b699086815260200190565b60405180910390a361083f565b60006103aa7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610ba560655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b604051635260769b60e11b815283906001600160a01b0382169063a4c0ed3690610c2390339087908790600401611517565b600060405180830381600087803b158015610c3d57600080fd5b505af1158015610c51573d6000803e3d6000fd5b5050505050505050565b610c658282610e41565b610484826001806109dd565b6001600160a01b038216610cc75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610471565b8060356000828254610cd991906114ad565b90915550506001600160a01b0382166000818152603360209081526040808320805486019055518481526000805160206116b7833981519152910160405180910390a35050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b6000610376610d55610b76565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610da787878787610f63565b91509150610db48161101d565b5095945050505050565b600054610100900460ff16610de55760405162461bcd60e51b815260040161047190611547565b610e0881604051806040016040528060018152602001603160f81b815250611162565b50565b600054610100900460ff16610e325760405162461bcd60e51b815260040161047190611547565b61048482826111a3565b505050565b6001600160a01b038216610ea15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610471565b6001600160a01b03821660009081526033602052604090205481811015610f155760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610471565b6001600160a01b03831660008181526033602090815260408083208686039055603580548790039055518581529192916000805160206116b7833981519152910160405180910390a3505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610f905750600090506003611014565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610fe4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661100d57600060019250925050611014565b9150600090505b94509492505050565b600081600481111561103157611031611592565b036110395750565b600181600481111561104d5761104d611592565b036110955760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610471565b60028160048111156110a9576110a9611592565b036110f65760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610471565b600381600481111561110a5761110a611592565b03610e085760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610471565b600054610100900460ff166111895760405162461bcd60e51b815260040161047190611547565b815160209283012081519190920120606591909155606655565b600054610100900460ff166111ca5760405162461bcd60e51b815260040161047190611547565b60366111d683826115f6565b5060376111e382826115f6565b50506038805460ff1916601217905550565b6000815180845260005b8181101561121b576020818501810151868301820152016111ff565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061124e60208301846111f5565b9392505050565b80356001600160a01b038116811461126c57600080fd5b919050565b6000806040838503121561128457600080fd5b61128d83611255565b946020939093013593505050565b6000806000606084860312156112b057600080fd5b6112b984611255565b92506112c760208501611255565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561130257600080fd5b61130b84611255565b925060208401359150604084013567ffffffffffffffff8082111561132f57600080fd5b818601915086601f83011261134357600080fd5b813581811115611355576113556112d7565b604051601f8201601f19908116603f0116810190838211818310171561137d5761137d6112d7565b8160405282815289602084870101111561139657600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000602082840312156113ca57600080fd5b61124e82611255565b600080600080600080600060e0888a0312156113ee57600080fd5b6113f788611255565b965061140560208901611255565b95506040880135945060608801359350608088013560ff8116811461142957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561145957600080fd5b61146283611255565b915061147060208401611255565b90509250929050565b600181811c9082168061148d57607f821691505b602082108103610d4257634e487b7160e01b600052602260045260246000fd5b8082018082111561037657634e487b7160e01b600052601160045260246000fd5b8281526040602082015260006114e760408301846111f5565b949350505050565b6020808252600e908201526d4f4e4c595f6c324741544557415960901b604082015260600190565b60018060a01b038416815282602082015260606040820152600061153e60608301846111f5565b95945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b601f821115610e3c57600081815260208120601f850160051c810160208610156115cf5750805b601f850160051c820191505b818110156115ee578281556001016115db565b505050505050565b815167ffffffffffffffff811115611610576116106112d7565b6116248161161e8454611479565b846115a8565b602080601f83116001811461165957600084156116415750858301515b600019600386901b1c1916600185901b1785556115ee565b600085815260208120601f198616915b8281101561168857888601518255948401946001909101908401611669565b50858210156116a65787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220e49a4b030a0d76f263e243228bdd190033986bdea06fa9c5bc3378148b13878964736f6c63430008100033496e697469616c697a61626c653a20636f6e747261637420697320616c726561496e697469616c697a61626c653a20636f6e7472616374206973206e6f7420697f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498";

type TestArbCustomTokenBurnFeeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestArbCustomTokenBurnFeeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestArbCustomTokenBurnFee__factory extends ContractFactory {
  constructor(...args: TestArbCustomTokenBurnFeeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TestArbCustomTokenBurnFee";
  }

  deploy(
    _l2Gateway: string,
    _l1Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestArbCustomTokenBurnFee> {
    return super.deploy(
      _l2Gateway,
      _l1Address,
      overrides || {}
    ) as Promise<TestArbCustomTokenBurnFee>;
  }
  getDeployTransaction(
    _l2Gateway: string,
    _l1Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_l2Gateway, _l1Address, overrides || {});
  }
  attach(address: string): TestArbCustomTokenBurnFee {
    return super.attach(address) as TestArbCustomTokenBurnFee;
  }
  connect(signer: Signer): TestArbCustomTokenBurnFee__factory {
    return super.connect(signer) as TestArbCustomTokenBurnFee__factory;
  }
  static readonly contractName: "TestArbCustomTokenBurnFee";
  public readonly contractName: "TestArbCustomTokenBurnFee";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestArbCustomTokenBurnFeeInterface {
    return new utils.Interface(_abi) as TestArbCustomTokenBurnFeeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestArbCustomTokenBurnFee {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestArbCustomTokenBurnFee;
  }
}
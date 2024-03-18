/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RollupProxy, RollupProxyInterface } from "../RollupProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "UpgradedSecondary",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "confirmPeriodBlocks",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "extraChallengeTimeBlocks",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "stakeToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "baseStake",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "wasmModuleRoot",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "loserStakeEscrow",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "chainConfig",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "genesisBlockNum",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "delayBlocks",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "futureBlocks",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "delaySeconds",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "futureSeconds",
                type: "uint256",
              },
            ],
            internalType: "struct ISequencerInbox.MaxTimeVariation",
            name: "sequencerInboxMaxTimeVariation",
            type: "tuple",
          },
        ],
        internalType: "struct Config",
        name: "config",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IBridge",
            name: "bridge",
            type: "address",
          },
          {
            internalType: "contract ISequencerInbox",
            name: "sequencerInbox",
            type: "address",
          },
          {
            internalType: "contract IInboxBase",
            name: "inbox",
            type: "address",
          },
          {
            internalType: "contract IOutbox",
            name: "outbox",
            type: "address",
          },
          {
            internalType: "contract IRollupEventInbox",
            name: "rollupEventInbox",
            type: "address",
          },
          {
            internalType: "contract IChallengeManager",
            name: "challengeManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "rollupAdminLogic",
            type: "address",
          },
          {
            internalType: "contract IRollupUser",
            name: "rollupUserLogic",
            type: "address",
          },
          {
            internalType: "address",
            name: "validatorUtils",
            type: "address",
          },
          {
            internalType: "address",
            name: "validatorWalletCreator",
            type: "address",
          },
        ],
        internalType: "struct ContractDependencies",
        name: "connectedContracts",
        type: "tuple",
      },
    ],
    name: "initializeProxy",
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
  "0x608060405234801561001057600080fd5b50610e6d806100206000396000f3fe6080604052600436106100225760003560e01c80636e24369e1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046109fa565b61006b565b610069610064610182565b61024b565b565b6000610075610274565b6001600160a01b031614801561009b57506000610090610295565b6001600160a01b0316145b80156100b7575060006100ac6102ab565b6001600160a01b0316145b1561017a576101768160c001516328ff127a60e01b84846040516024016100df929190610c37565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925260e08501518683015192516001600160a01b039093166024840152909163189acdbd60e31b9060440160408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915260a08701516102c1565b5050565b610176610059565b600060043610156101c85760405162461bcd60e51b815260206004820152600b60248201526a4e4f5f46554e435f53494760a81b60448201526064015b60405180910390fd5b6000336101d3610274565b6001600160a01b031614156101ef576101ea610295565b6101f7565b6101f76102ab565b90506001600160a01b0381163b6102465760405162461bcd60e51b815260206004820152601360248201527215105491d15517d393d517d0d3d395149050d5606a1b60448201526064016101bf565b919050565b3660008037600080366000845af43d6000803e80801561026a573d6000f35b3d6000fd5b505050565b6000600080516020610db18339815191525b546001600160a01b0316919050565b6000600080516020610dd1833981519152610286565b6000600080516020610e18833981519152610286565b6102ec60017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104610d46565b600080516020610db18339815191521461030857610308610d6b565b61033360017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610d46565b600080516020610dd18339815191521461034f5761034f610d6b565b61037a60017f2b1dbce74324248c222f0ec2d5ed7bd323cfc425b336f0253c5ccfda7265546e610d46565b600080516020610e188339815191521461039657610396610d6b565b61039f816103be565b6103ab85856000610415565b6103b783836000610440565b5050505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103e7610274565b604080516001600160a01b03928316815291841660208301520160405180910390a161041281610449565b50565b61041e836104e0565b60008251118061042b5750805b1561026f5761043a8383610520565b50505050565b61041e8361054c565b6001600160a01b0381166104ae5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084016101bf565b80600080516020610db18339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b6104e98161058c565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606105458383604051806060016040528060278152602001610df16027913961060e565b9392505050565b610555816106eb565b6040516001600160a01b038216907ff7eed2a7fabbf1bec8d55ed5e785cc76622376dde5df4ff15470551e030b813490600090a250565b6001600160a01b0381163b6105f95760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016101bf565b80600080516020610dd18339815191526104bf565b60606001600160a01b0384163b6106765760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101bf565b600080856001600160a01b0316856040516106919190610d81565b600060405180830381855af49150503d80600081146106cc576040519150601f19603f3d011682016040523d82523d6000602084013e6106d1565b606091505b50915091506106e1828286610777565b9695505050505050565b6001600160a01b0381163b6107625760405162461bcd60e51b815260206004820152603760248201527f455243313936373a206e6577207365636f6e6461727920696d706c656d656e74604482015276185d1a5bdb881a5cc81b9bdd08184818dbdb9d1c9858dd604a1b60648201526084016101bf565b80600080516020610e188339815191526104bf565b60608315610786575081610545565b8251156107965782518084602001fd5b8160405162461bcd60e51b81526004016101bf9190610d9d565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156107e9576107e96107b0565b60405290565b60405161016081016001600160401b03811182821017156107e9576107e96107b0565b80356001600160401b038116811461024657600080fd5b80356001600160a01b038116811461024657600080fd5b600082601f83011261085157600080fd5b81356001600160401b038082111561086b5761086b6107b0565b604051601f8301601f19908116603f01168101908282118183101715610893576108936107b0565b816040528381528660208588010111156108ac57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000608082840312156108de57600080fd5b604051608081018181106001600160401b0382111715610900576109006107b0565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b6000610140828403121561094457600080fd5b61094c6107c6565b905061095782610829565b815261096560208301610829565b602082015261097660408301610829565b604082015261098760608301610829565b606082015261099860808301610829565b60808201526109a960a08301610829565b60a08201526109ba60c08301610829565b60c08201526109cb60e08301610829565b60e08201526101006109de818401610829565b908201526101206109f0838201610829565b9082015292915050565b6000806101608385031215610a0e57600080fd5b82356001600160401b0380821115610a2557600080fd5b908401906101c08287031215610a3a57600080fd5b610a426107ef565b610a4b83610812565b8152610a5960208401610812565b6020820152610a6a60408401610829565b60408201526060830135606082015260808301356080820152610a8f60a08401610829565b60a0820152610aa060c08401610829565b60c082015260e083013560e08201526101008084013583811115610ac357600080fd5b610acf89828701610840565b8284015250506101209150610ae5828401610812565b828201526101409150610afa878385016108cc565b82820152809450505050610b118460208501610931565b90509250929050565b6001600160a01b03169052565b60005b83811015610b42578181015183820152602001610b2a565b8381111561043a5750506000910152565b60008151808452610b6b816020860160208601610b27565b601f01601f19169290920160200192915050565b610b8a828251610b1a565b6020810151610b9c6020840182610b1a565b506040810151610baf6040840182610b1a565b506060810151610bc26060840182610b1a565b506080810151610bd56080840182610b1a565b5060a0810151610be860a0840182610b1a565b5060c0810151610bfb60c0840182610b1a565b5060e0810151610c0e60e0840182610b1a565b5061010080820151610c2282850182610b1a565b50506101208082015161043a82850182610b1a565b6000610160808352610c5481840186516001600160401b03169052565b5060208401516001600160401b03166101808301526040840151610c7c6101a0840182610b1a565b5060608401516101c0818185015260808601516101e085015260a08601519150610caa610200850183610b1a565b60c08601519150610cbf610220850183610b1a565b60e086015161024085015261010086015191508061026085015250610ce8610320840182610b53565b9050610120850151610d066102808501826001600160401b03169052565b5061014085015180516102a085015260208101516102c085015260408101516102e085015260608101516103008501525090506105456020830184610b7f565b600082821015610d6657634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60008251610d93818460208701610b27565b9190910192915050565b6020815260006105456020830184610b5356feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65642b1dbce74324248c222f0ec2d5ed7bd323cfc425b336f0253c5ccfda7265546da264697066735822122045d1669737d3f66bbfc5cb21688cdbc2decfc09897811ac43760f60bfdc1438064736f6c63430008090033";

type RollupProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RollupProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RollupProxy__factory extends ContractFactory {
  constructor(...args: RollupProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RollupProxy";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RollupProxy> {
    return super.deploy(overrides || {}) as Promise<RollupProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RollupProxy {
    return super.attach(address) as RollupProxy;
  }
  connect(signer: Signer): RollupProxy__factory {
    return super.connect(signer) as RollupProxy__factory;
  }
  static readonly contractName: "RollupProxy";
  public readonly contractName: "RollupProxy";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RollupProxyInterface {
    return new utils.Interface(_abi) as RollupProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupProxy {
    return new Contract(address, _abi, signerOrProvider) as RollupProxy;
  }
}

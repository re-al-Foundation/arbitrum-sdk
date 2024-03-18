/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EthVault, EthVaultInterface } from "../EthVault";

const _abi = [
  {
    inputs: [],
    name: "justRevert",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256",
      },
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b5060f3806100236000396000f3fe60806040526004361060305760003560e01c8063408def1e14603557806350b23fd214604757806354fd4d5014604d575b600080fd5b6045604036600460a5565b600055565b005b60456073565b348015605857600080fd5b50606160005481565b60405190815260200160405180910390f35b60405162461bcd60e51b815260206004820152600360248201526262796560e81b604482015260640160405180910390fd5b60006020828403121560b657600080fd5b503591905056fea26469706673582212207ebc17d77ebaabefad89161947016e1af2be3259ff0102b57344eb6ffc216b9064736f6c63430008090033";

type EthVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EthVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EthVault__factory extends ContractFactory {
  constructor(...args: EthVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EthVault";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EthVault> {
    return super.deploy(overrides || {}) as Promise<EthVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EthVault {
    return super.attach(address) as EthVault;
  }
  connect(signer: Signer): EthVault__factory {
    return super.connect(signer) as EthVault__factory;
  }
  static readonly contractName: "EthVault";
  public readonly contractName: "EthVault";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthVaultInterface {
    return new utils.Interface(_abi) as EthVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthVault {
    return new Contract(address, _abi, signerOrProvider) as EthVault;
  }
}

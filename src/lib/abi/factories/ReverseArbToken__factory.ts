/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ReverseArbToken,
  ReverseArbTokenInterface,
} from "../ReverseArbToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
];

export class ReverseArbToken__factory {
  static readonly abi = _abi;
  static createInterface(): ReverseArbTokenInterface {
    return new utils.Interface(_abi) as ReverseArbTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReverseArbToken {
    return new Contract(address, _abi, signerOrProvider) as ReverseArbToken;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICloneable, ICloneableInterface } from "../ICloneable";

const _abi = [
  {
    inputs: [],
    name: "isMaster",
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
];

export class ICloneable__factory {
  static readonly abi = _abi;
  static createInterface(): ICloneableInterface {
    return new utils.Interface(_abi) as ICloneableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICloneable {
    return new Contract(address, _abi, signerOrProvider) as ICloneable;
  }
}

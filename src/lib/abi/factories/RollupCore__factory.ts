/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { RollupCore, RollupCoreInterface } from "../RollupCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "sendRoot",
        type: "bytes32",
      },
    ],
    name: "NodeConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "parentNodeHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nodeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "executionHash",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "beforeState",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "afterState",
            type: "tuple",
          },
          {
            internalType: "uint64",
            name: "numBlocks",
            type: "uint64",
          },
        ],
        indexed: false,
        internalType: "struct Assertion",
        name: "assertion",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "afterInboxBatchAcc",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "wasmModuleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "inboxMaxCount",
        type: "uint256",
      },
    ],
    name: "NodeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "NodeRejected",
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
        indexed: true,
        internalType: "uint64",
        name: "challengeIndex",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asserter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "challenger",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "challengedNode",
        type: "uint64",
      },
    ],
    name: "RollupChallengeStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "machineHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "RollupInitialized",
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
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalBalance",
        type: "uint256",
      },
    ],
    name: "UserStakeUpdated",
    type: "event",
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
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalBalance",
        type: "uint256",
      },
    ],
    name: "UserWithdrawableFundsUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_stakerMap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountStaked",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "index",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "latestStakedNode",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "currentChallenge",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "isStaked",
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
        name: "staker",
        type: "address",
      },
    ],
    name: "amountStaked",
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
    name: "baseStake",
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
    inputs: [],
    name: "chainId",
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
    name: "challengeManager",
    outputs: [
      {
        internalType: "contract IChallengeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmPeriodBlocks",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "currentChallenge",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extraChallengeTimeBlocks",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "firstUnresolvedNode",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "getNode",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "challengeHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "confirmData",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "prevNum",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "deadlineBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "noChildConfirmedBeforeBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "stakerCount",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "childStakerCount",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "firstChildBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "latestChildNumber",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "createdAtBlock",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "nodeHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Node",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "getNodeCreationBlockForLogLookup",
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
        name: "staker",
        type: "address",
      },
    ],
    name: "getStaker",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amountStaked",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "latestStakedNode",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "currentChallenge",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "isStaked",
            type: "bool",
          },
        ],
        internalType: "struct IRollupCore.Staker",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "stakerNum",
        type: "uint64",
      },
    ],
    name: "getStakerAddress",
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
    name: "inbox",
    outputs: [
      {
        internalType: "contract IInboxBase",
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
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "isStaked",
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
        name: "staker",
        type: "address",
      },
    ],
    name: "isStakedOnLatestConfirmed",
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
    name: "isValidator",
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
        name: "staker",
        type: "address",
      },
    ],
    name: "isZombie",
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
    name: "lastStakeBlock",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestConfirmed",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestNodeCreated",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "latestStakedNode",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "loserStakeEscrow",
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
    name: "minimumAssertionPeriod",
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
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "nodeHasStaker",
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
    name: "outbox",
    outputs: [
      {
        internalType: "contract IOutbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "rollupDeploymentBlock",
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
    name: "rollupEventInbox",
    outputs: [
      {
        internalType: "contract IRollupEventInbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "stakeToken",
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
    name: "stakerCount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWithdrawableFunds",
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
    name: "validatorUtils",
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
    name: "validatorWalletCreator",
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
    name: "validatorWhitelistDisabled",
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
    name: "wasmModuleRoot",
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
        name: "user",
        type: "address",
      },
    ],
    name: "withdrawableFunds",
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
        internalType: "uint256",
        name: "zombieNum",
        type: "uint256",
      },
    ],
    name: "zombieAddress",
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
    name: "zombieCount",
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
        internalType: "uint256",
        name: "zombieNum",
        type: "uint256",
      },
    ],
    name: "zombieLatestStakedNode",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class RollupCore__factory {
  static readonly abi = _abi;
  static createInterface(): RollupCoreInterface {
    return new utils.Interface(_abi) as RollupCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupCore {
    return new Contract(address, _abi, signerOrProvider) as RollupCore;
  }
}

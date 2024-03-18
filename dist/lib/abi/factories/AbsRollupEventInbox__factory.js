"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsRollupEventInbox__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "AlreadyInit",
        type: "error",
    },
    {
        inputs: [],
        name: "HadZeroInit",
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
                name: "owner",
                type: "address",
            },
        ],
        name: "NotOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "RollupNotChanged",
        type: "error",
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
                internalType: "contract IBridge",
                name: "_bridge",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rollup",
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
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "chainConfig",
                type: "string",
            },
        ],
        name: "rollupInitialized",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updateRollupAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class AbsRollupEventInbox__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AbsRollupEventInbox__factory = AbsRollupEventInbox__factory;
AbsRollupEventInbox__factory.abi = _abi;

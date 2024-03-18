"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Bridge__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "stored",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "received",
                type: "uint256",
            },
        ],
        name: "BadSequencerMessageNumber",
        type: "error",
    },
    {
        inputs: [],
        name: "CallNotAllowed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        name: "CallTargetNotAllowed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
        ],
        name: "InvalidOutboxSet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "InvalidTokenSet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "NotContract",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotDelayedInbox",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "NotOutbox",
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
                name: "sender",
                type: "address",
            },
        ],
        name: "NotSequencerInbox",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "outbox",
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
        name: "BridgeCallTriggered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "InboxToggle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "messageIndex",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "beforeInboxAcc",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "inbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "kind",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "baseFeeL1",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "timestamp",
                type: "uint64",
            },
        ],
        name: "MessageDelivered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "OutboxToggle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "rollup",
                type: "address",
            },
        ],
        name: "RollupUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newSequencerInbox",
                type: "address",
            },
        ],
        name: "SequencerInboxUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "acceptFundsFromOldBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "activeOutbox",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedDelayedInboxList",
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
                internalType: "address",
                name: "inbox",
                type: "address",
            },
        ],
        name: "allowedDelayedInboxes",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "allowedOutboxList",
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
                internalType: "address",
                name: "outbox",
                type: "address",
            },
        ],
        name: "allowedOutboxes",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "delayedInboxAccs",
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
        inputs: [],
        name: "delayedMessageCount",
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
                internalType: "uint8",
                name: "kind",
                type: "uint8",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "tokenFeeAmount",
                type: "uint256",
            },
        ],
        name: "enqueueDelayedMessage",
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
                internalType: "bytes32",
                name: "dataHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "afterDelayedMessagesRead",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "prevMessageCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "newMessageCount",
                type: "uint256",
            },
        ],
        name: "enqueueSequencerMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "seqMessageIndex",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "beforeAcc",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "delayedAcc",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "acc",
                type: "bytes32",
            },
        ],
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
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeCall",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "returnData",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IOwnable",
                name: "rollup_",
                type: "address",
            },
            {
                internalType: "address",
                name: "nativeToken_",
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
        name: "nativeToken",
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
        name: "rollup",
        outputs: [
            {
                internalType: "contract IOwnable",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "sequencerInboxAccs",
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
        inputs: [],
        name: "sequencerMessageCount",
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
        name: "sequencerReportedSubMessageCount",
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
                name: "inbox",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setDelayedInbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "outbox",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setOutbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sequencerInbox",
                type: "address",
            },
        ],
        name: "setSequencerInbox",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newMsgCount",
                type: "uint256",
            },
        ],
        name: "setSequencerReportedSubMessageCount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "messageDataHash",
                type: "bytes32",
            },
        ],
        name: "submitBatchSpendingReport",
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
                internalType: "contract IOwnable",
                name: "_rollup",
                type: "address",
            },
        ],
        name: "updateRollupAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523060805234801561001457600080fd5b50608051611d9a61003060003960006108460152611d9a6000f3fe60806040526004361061014a5760003560e01c80639e5d4c49116100b6578063e1758bd81161006f578063e1758bd8146103cb578063e76f5c8d146103eb578063e77145f4146101e3578063eca067ad1461040b578063ee35f32714610420578063f81ff3b31461044057600080fd5b80639e5d4c4914610308578063ab5d894314610336578063ae60bd131461034b578063cb23bcb51461036b578063cee3d7281461038b578063d5719dc2146103ab57600080fd5b80635fca4a16116101085780635fca4a161461022557806375d81e251461023b5780637a88b1071461025b57806386598a561461027b578063919cc706146102bb578063945e1147146102db57600080fd5b806284120c1461014f57806316bf557914610173578063413b35bd1461019357806347fb24c5146101c3578063485cc955146101e55780634f61f85014610205575b600080fd5b34801561015b57600080fd5b506007545b6040519081526020015b60405180910390f35b34801561017f57600080fd5b5061016061018e3660046119be565b610460565b34801561019f57600080fd5b506101b36101ae3660046119ec565b610481565b604051901515815260200161016a565b3480156101cf57600080fd5b506101e36101de366004611a17565b6104a2565b005b3480156101f157600080fd5b506101e3610200366004611a50565b610797565b34801561021157600080fd5b506101e36102203660046119ec565b610943565b34801561023157600080fd5b50610160600a5481565b34801561024757600080fd5b50610160610256366004611a7e565b610a68565b34801561026757600080fd5b50610160610276366004611aca565b610a7f565b34801561028757600080fd5b5061029b610296366004611af6565b610ac5565b60408051948552602085019390935291830152606082015260800161016a565b3480156102c757600080fd5b506101e36102d63660046119ec565b610c2c565b3480156102e757600080fd5b506102fb6102f63660046119be565b610d46565b60405161016a9190611b28565b34801561031457600080fd5b50610328610323366004611b3c565b610d70565b60405161016a929190611c1d565b34801561034257600080fd5b506102fb610ea5565b34801561035757600080fd5b506101b36103663660046119ec565b610ecb565b34801561037757600080fd5b506008546102fb906001600160a01b031681565b34801561039757600080fd5b506101e36103a6366004611a17565b610eed565b3480156103b757600080fd5b506101606103c63660046119be565b611206565b3480156103d757600080fd5b506033546102fb906001600160a01b031681565b3480156103f757600080fd5b506102fb6104063660046119be565b611216565b34801561041757600080fd5b50600654610160565b34801561042c57600080fd5b506009546102fb906001600160a01b031681565b34801561044c57600080fd5b506101e361045b3660046119be565b611226565b6007818154811061047057600080fd5b600091825260209091200154905081565b6001600160a01b031660009081526002602052604090206001015460ff1690565b6008546001600160a01b0316331461057a5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156104f957600080fd5b505afa15801561050d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105319190611c38565b9050336001600160a01b0382161461057857600854604051630739600760e01b815261056f9133916001600160a01b03909116908490600401611c55565b60405180910390fd5b505b6001600160a01b0382166000818152600160208181526040928390209182015492518515158152919360ff90931692917f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521910160405180910390a282151581151514156105e75750505050565b821561067557604080518082018252600380548252600160208084018281526001600160a01b038a166000818152928490529582209451855551938201805460ff1916941515949094179093558154908101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319169091179055610791565b6003805461068590600190611c78565b8154811061069557610695611c9d565b6000918252602090912001548254600380546001600160a01b039093169290919081106106c4576106c4611c9d565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000015460016000600385600001548154811061071257610712611c9d565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600380548061074857610748611cb3565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526001908190526040822091825501805460ff191690555b50505050565b600054610100900460ff166107b25760005460ff16156107b6565b303b155b6108195760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161056f565b600054610100900460ff1615801561083b576000805461ffff19166101011790555b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108c95760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161056f565b6001600160a01b0382166108f2578160405163036ffb6b60e11b815260040161056f9190611b28565b603380546001600160a01b038085166001600160a01b031992831617909255600580548216831790556008805492861692909116919091179055801561093e576000805461ff00191690555b505050565b6008546001600160a01b03163314610a125760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561099a57600080fd5b505afa1580156109ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d29190611c38565b9050336001600160a01b03821614610a1057600854604051630739600760e01b815261056f9133916001600160a01b03909116908490600401611c55565b505b600980546001600160a01b0319166001600160a01b0383161790556040517f8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a90610a5d908390611b28565b60405180910390a150565b6000610a76858585856112fa565b95945050505050565b6009546000906001600160a01b03163314610aaf573360405163223e13c160e21b815260040161056f9190611b28565b610abe600d844342488761133f565b9392505050565b6009546000908190819081906001600160a01b03163314610afb573360405163223e13c160e21b815260040161056f9190611b28565b85600a5414158015610b0c57508515155b8015610b195750600a5415155b15610b4557600a5460405163e2051feb60e01b815260048101919091526024810187905260440161056f565b600a85905560075493508315610b835760078054610b6590600190611c78565b81548110610b7557610b75611c9d565b906000526020600020015492505b8615610bb4576006610b96600189611c78565b81548110610ba657610ba6611c9d565b906000526020600020015491505b60408051602081018590529081018990526060810183905260800160408051601f198184030181529190528051602090910120600780546001810182556000919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688018190559398929750909550919350915050565b6008546001600160a01b03163314610cfb5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610c8357600080fd5b505afa158015610c97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbb9190611c38565b9050336001600160a01b03821614610cf957600854604051630739600760e01b815261056f9133916001600160a01b03909116908490600401611c55565b505b600880546001600160a01b0319166001600160a01b0383161790556040517fae1f5aa15f6ff844896347ceca2a3c24c8d3a27785efdeacd581a0a95172784a90610a5d908390611b28565b60048181548110610d5657600080fd5b6000918252602090912001546001600160a01b0316905081565b60006060610d7d33610481565b610d9c57336040516332ea82ab60e01b815260040161056f9190611b28565b8215801590610db357506001600160a01b0386163b155b15610dd3578560405163b5cf5b8f60e01b815260040161056f9190611b28565b600580546001600160a01b031981163317909155604080516020601f87018190048102820181019092528581526001600160a01b0390921691610e34918991899189908990819084018382808284376000920191909152506114ce92505050565b600580546001600160a01b0319166001600160a01b038581169190911790915560405192955090935088169033907f2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d46690610e93908a908a908a90611cc9565b60405180910390a35094509492505050565b6005546000906001600160a01b0390811690811415610ec657600091505090565b919050565b6001600160a01b03166000908152600160208190526040909120015460ff1690565b6008546001600160a01b03163314610fbc5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610f4457600080fd5b505afa158015610f58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7c9190611c38565b9050336001600160a01b03821614610fba57600854604051630739600760e01b815261056f9133916001600160a01b03909116908490600401611c55565b505b6001600160a01b038281161415610fe8578160405163077abed160e41b815260040161056f9190611b28565b6001600160a01b038216600081815260026020908152604091829020600181015492518515158152909360ff90931692917f49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa910160405180910390a282151581151514156110565750505050565b82156110e557604080518082018252600480548252600160208084018281526001600160a01b038a16600081815260029093529582209451855551938201805460ff1916941515949094179093558154908101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319169091179055610791565b600480546110f590600190611c78565b8154811061110557611105611c9d565b6000918252602090912001548254600480546001600160a01b0390931692909190811061113457611134611c9d565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000015460026000600485600001548154811061118257611182611c9d565b60009182526020808320909101546001600160a01b0316835282019290925260400190205560048054806111b8576111b8611cb3565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526002905260408120908155600101805460ff1916905550505050565b6006818154811061047057600080fd5b60038181548110610d5657600080fd5b6008546001600160a01b031633146112f55760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561127d57600080fd5b505afa158015611291573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b59190611c38565b9050336001600160a01b038216146112f357600854604051630739600760e01b815261056f9133916001600160a01b03909116908490600401611c55565b505b600a55565b600061130533610ecb565b611324573360405163b6c60ea360e01b815260040161056f9190611b28565b600061133486864342858961133f565b9050610a76836116b5565b600654604080516001600160f81b031960f88a901b166020808301919091526bffffffffffffffffffffffff1960608a901b1660218301526001600160c01b031960c089811b8216603585015288901b16603d830152604582018490526065820186905260858083018690528351808403909101815260a5909201909252805191012060009190600082156113f95760066113db600185611c78565b815481106113eb576113eb611c9d565b906000526020600020015490505b6040805160208082018490528183018590528251808303840181526060830180855281519190920120600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f015533905260ff8c1660808201526001600160a01b038b1660a082015260c0810187905260e0810188905267ffffffffffffffff89166101008201529051829185917f5e3c1311ea442664e8b1611bfabef659120ea7a0a2cfc0667700bebc69cbffe1918190036101200190a3509098975050505050505050565b6033546000906060906001600160a01b039081169086168114156115075780604051631c2d9a4160e31b815260040161056f9190611b28565b61151b6001600160a01b03821687876116d0565b835160019350156116ac576040516370a0823160e01b81526000906001600160a01b038316906370a0823190611555903090600401611b28565b60206040518083038186803b15801561156d57600080fd5b505afa158015611581573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a59190611cff565b9050866001600160a01b0316856040516115bf9190611d18565b6000604051808303816000865af19150503d80600081146115fc576040519150601f19603f3d011682016040523d82523d6000602084013e611601565b606091505b506040516370a0823160e01b815291955093506000906001600160a01b038416906370a0823190611636903090600401611b28565b60206040518083038186803b15801561164e57600080fd5b505afa158015611662573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116869190611cff565b9050818110156116a9576040516315dace2d60e21b815260040160405180910390fd5b50505b50935093915050565b6033546116cd906001600160a01b0316333084611733565b50565b6040516001600160a01b03831660248201526044810182905261093e90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261176b565b6040516001600160a01b03808516602483015283166044820152606481018290526107919085906323b872dd60e01b906084016116fc565b60006117c0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661183d9092919063ffffffff16565b80519091501561093e57808060200190518101906117de9190611d34565b61093e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161056f565b606061184c8484600085611854565b949350505050565b6060824710156118b55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161056f565b6001600160a01b0385163b61190c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161056f565b600080866001600160a01b031685876040516119289190611d18565b60006040518083038185875af1925050503d8060008114611965576040519150601f19603f3d011682016040523d82523d6000602084013e61196a565b606091505b509150915061197a828286611985565b979650505050505050565b60608315611994575081610abe565b8251156119a45782518084602001fd5b8160405162461bcd60e51b815260040161056f9190611d51565b6000602082840312156119d057600080fd5b5035919050565b6001600160a01b03811681146116cd57600080fd5b6000602082840312156119fe57600080fd5b8135610abe816119d7565b80151581146116cd57600080fd5b60008060408385031215611a2a57600080fd5b8235611a35816119d7565b91506020830135611a4581611a09565b809150509250929050565b60008060408385031215611a6357600080fd5b8235611a6e816119d7565b91506020830135611a45816119d7565b60008060008060808587031215611a9457600080fd5b843560ff81168114611aa557600080fd5b93506020850135611ab5816119d7565b93969395505050506040820135916060013590565b60008060408385031215611add57600080fd5b8235611ae8816119d7565b946020939093013593505050565b60008060008060808587031215611b0c57600080fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b60008060008060608587031215611b5257600080fd5b8435611b5d816119d7565b935060208501359250604085013567ffffffffffffffff80821115611b8157600080fd5b818701915087601f830112611b9557600080fd5b813581811115611ba457600080fd5b886020828501011115611bb657600080fd5b95989497505060200194505050565b60005b83811015611be0578181015183820152602001611bc8565b838111156107915750506000910152565b60008151808452611c09816020860160208601611bc5565b601f01601f19169290920160200192915050565b821515815260406020820152600061184c6040830184611bf1565b600060208284031215611c4a57600080fd5b8151610abe816119d7565b6001600160a01b0393841681529183166020830152909116604082015260600190565b600082821015611c9857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b600060208284031215611d1157600080fd5b5051919050565b60008251611d2a818460208701611bc5565b9190910192915050565b600060208284031215611d4657600080fd5b8151610abe81611a09565b602081526000610abe6020830184611bf156fea2646970667358221220acaca6cc8d40714063ec21646cf3fb554ba0394dc105b80d1c758ae649ee309064736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC20Bridge__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "ERC20Bridge";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC20Bridge__factory = ERC20Bridge__factory;
ERC20Bridge__factory.bytecode = _bytecode;
ERC20Bridge__factory.abi = _abi;

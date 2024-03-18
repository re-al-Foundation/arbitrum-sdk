import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CreationCodeTest, CreationCodeTestInterface } from "../CreationCodeTest";
type CreationCodeTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CreationCodeTest__factory extends ContractFactory {
    constructor(...args: CreationCodeTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CreationCodeTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CreationCodeTest;
    connect(signer: Signer): CreationCodeTest__factory;
    static readonly contractName: "CreationCodeTest";
    readonly contractName: "CreationCodeTest";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610258806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635f9c707914610030575b600080fd5b61004361003e3660046100ac565b610059565b6040516100509190610181565b60405180910390f35b60606100648261006a565b92915050565b60608151826040516020016100809291906101b4565b6040516020818303038152906040529050919050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156100be57600080fd5b813567ffffffffffffffff808211156100d657600080fd5b818401915084601f8301126100ea57600080fd5b8135818111156100fc576100fc610096565b604051601f8201601f19908116603f0116810190838211818310171561012457610124610096565b8160405282815287602084870101111561013d57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60005b83811015610178578181015183820152602001610160565b50506000910152565b60208152600082518060208401526101a081604085016020870161015d565b601f01601f19169190910160400192915050565b710608060405234801561001057600080fd5b560741b8152606160f81b601282015260f083901b6001600160f01b03191660138201526a4030801030001cb00079ff60a91b6015820152815160009061021481602080860190870161015d565b91909101602001939250505056fea2646970667358221220002e8029cdde1aebf22e885fc3d1d87e8b0c2e30dcda6ad969780405c64c4b5864736f6c63430008100033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): CreationCodeTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CreationCodeTest;
}
export {};

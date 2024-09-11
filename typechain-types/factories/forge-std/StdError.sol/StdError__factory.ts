/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StdError,
  StdErrorInterface,
} from "../../../forge-std/StdError.sol/StdError";

const _abi = [
  {
    inputs: [],
    name: "arithmeticError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assertionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "divisionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "encodeStorageError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enumConversionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "indexOOBError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "memOverflowError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "popError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroVarError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610ad7610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c8063986c5f6811610070578063986c5f681461011a578063b22dc54d14610138578063b67689da14610156578063d160e4de14610174578063fa784a44146101925761009d565b806305ee8612146100a257806310332977146100c05780631de45560146100de5780638995290f146100fc575b600080fd5b6100aa6101b0565b6040516100b79190610762565b60405180910390f35b6100c8610242565b6040516100d59190610762565b60405180910390f35b6100e66102d4565b6040516100f39190610762565b60405180910390f35b610104610366565b6040516101119190610762565b60405180910390f35b6101226103f8565b60405161012f9190610762565b60405180910390f35b61014061048a565b60405161014d9190610762565b60405180910390f35b61015e61051c565b60405161016b9190610762565b60405180910390f35b61017c6105ae565b6040516101899190610762565b60405180910390f35b61019a610640565b6040516101a79190610762565b60405180910390f35b60326040516024016101c291906107d6565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b6001604051602401610254919061082c565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b60216040516024016102e69190610882565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b601160405160240161037891906108d8565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b604160405160240161040a919061092e565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b603160405160240161049c9190610984565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b605160405160240161052e91906109da565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b60226040516024016105c09190610a30565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b60126040516024016106529190610a86565b6040516020818303038152906040527f4e487b71000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081565b600081519050919050565b600082825260208201905092915050565b60005b8381101561070c5780820151818401526020810190506106f1565b60008484015250505050565b6000601f19601f8301169050919050565b6000610734826106d2565b61073e81856106dd565b935061074e8185602086016106ee565b61075781610718565b840191505092915050565b6000602082019050818103600083015261077c8184610729565b905092915050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006107c06107bb6107b684610784565b61079b565b61078e565b9050919050565b6107d0816107a5565b82525050565b60006020820190506107eb60008301846107c7565b92915050565b6000819050919050565b600061081661081161080c846107f1565b61079b565b61078e565b9050919050565b610826816107fb565b82525050565b6000602082019050610841600083018461081d565b92915050565b6000819050919050565b600061086c61086761086284610847565b61079b565b61078e565b9050919050565b61087c81610851565b82525050565b60006020820190506108976000830184610873565b92915050565b6000819050919050565b60006108c26108bd6108b88461089d565b61079b565b61078e565b9050919050565b6108d2816108a7565b82525050565b60006020820190506108ed60008301846108c9565b92915050565b6000819050919050565b600061091861091361090e846108f3565b61079b565b61078e565b9050919050565b610928816108fd565b82525050565b6000602082019050610943600083018461091f565b92915050565b6000819050919050565b600061096e61096961096484610949565b61079b565b61078e565b9050919050565b61097e81610953565b82525050565b60006020820190506109996000830184610975565b92915050565b6000819050919050565b60006109c46109bf6109ba8461099f565b61079b565b61078e565b9050919050565b6109d4816109a9565b82525050565b60006020820190506109ef60008301846109cb565b92915050565b6000819050919050565b6000610a1a610a15610a10846109f5565b61079b565b61078e565b9050919050565b610a2a816109ff565b82525050565b6000602082019050610a456000830184610a21565b92915050565b6000819050919050565b6000610a70610a6b610a6684610a4b565b61079b565b61078e565b9050919050565b610a8081610a55565b82525050565b6000602082019050610a9b6000830184610a77565b9291505056fea2646970667358221220e40d0770627c30e95372d36bb48cf647ddfcb8f0d83889fadb1dca969bdc4e1d64736f6c63430008130033";

type StdErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError__factory extends ContractFactory {
  constructor(...args: StdErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StdError> {
    return super.deploy(overrides || {}) as Promise<StdError>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdError {
    return super.attach(address) as StdError;
  }
  override connect(signer: Signer): StdError__factory {
    return super.connect(signer) as StdError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdErrorInterface {
    return new utils.Interface(_abi) as StdErrorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdError {
    return new Contract(address, _abi, signerOrProvider) as StdError;
  }
}
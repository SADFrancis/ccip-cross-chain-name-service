/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockERC721,
  MockERC721Interface,
} from "../../../forge-std/mocks/MockERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
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
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612009806100206000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb465146102a9578063b88d4fde146102d2578063c87b56dd146102ee578063e985e9c51461032b576100dd565b80636352211e1461020457806370a082311461024157806395d89b411461027e576100dd565b8063095ea7b3116100bb578063095ea7b31461018757806323b872dd146101a357806342842e0e146101bf5780634cd88b76146101db576100dd565b806301ffc9a7146100e257806306fdde031461011f578063081812fc1461014a575b600080fd5b3480156100ee57600080fd5b50610109600480360381019061010491906111a7565b610368565b60405161011691906111ef565b60405180910390f35b34801561012b57600080fd5b506101346103fa565b604051610141919061129a565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c91906112f2565b61048c565b60405161017e9190611360565b60405180910390f35b6101a1600480360381019061019c91906113a7565b6104c9565b005b6101bd60048036038101906101b891906113e7565b6106b2565b005b6101d960048036038101906101d491906113e7565b610abc565b005b3480156101e757600080fd5b5061020260048036038101906101fd919061156f565b610be3565b005b34801561021057600080fd5b5061022b600480360381019061022691906112f2565b610c72565b6040516102389190611360565b60405180910390f35b34801561024d57600080fd5b50610268600480360381019061026391906115e7565b610d1d565b6040516102759190611623565b60405180910390f35b34801561028a57600080fd5b50610293610dd4565b6040516102a0919061129a565b60405180910390f35b3480156102b557600080fd5b506102d060048036038101906102cb919061166a565b610e66565b005b6102ec60048036038101906102e7919061174b565b610f63565b005b3480156102fa57600080fd5b50610315600480360381019061031091906112f2565b61108d565b604051610322919061129a565b60405180910390f35b34801561033757600080fd5b50610352600480360381019061034d91906117ce565b611094565b60405161035f91906111ef565b60405180910390f35b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c357506380ac58cd60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f35750635b5e139f60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6060600080546104099061183d565b80601f01602080910402602001604051908101604052809291908181526020018280546104359061183d565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b5050505050905090565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105c15750600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f7906118ba565b60405180910390fd5b826004600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6002600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a90611926565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b990611992565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108825750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b806108eb57506004600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61092a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610921906118ba565b60405180910390fd5b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061097a906119e1565b9190505550600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906109cf90611a0a565b9190505550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b610ac78383836106b2565b610ad082611128565b1580610b9f575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a023386856040518463ffffffff1660e01b8152600401610b3b93929190611a89565b6020604051808303816000875af1158015610b5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7e9190611ae8565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610bde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd590611b61565b60405180910390fd5b505050565b600660009054906101000a900460ff1615610c33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2a90611bcd565b60405180910390fd5b8160009081610c429190611d99565b508060019081610c529190611d99565b506001600660006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff1603610d18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0f90611eb7565b60405180910390fd5b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8490611f23565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610de39061183d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0f9061183d565b8015610e5c5780601f10610e3157610100808354040283529160200191610e5c565b820191906000526020600020905b815481529060010190602001808311610e3f57829003601f168201915b5050505050905090565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f5791906111ef565b60405180910390a35050565b610f6e8484846106b2565b610f7783611128565b1580611048575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168373ffffffffffffffffffffffffffffffffffffffff1663150b7a02338786866040518563ffffffff1660e01b8152600401610fe49493929190611f87565b6020604051808303816000875af1158015611003573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110279190611ae8565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b611087576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107e90611b61565b60405180910390fd5b50505050565b6060919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6111848161114f565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc611145565b5b60006111cb84828501611192565b91505092915050565b60008115159050919050565b6111e9816111d4565b82525050565b600060208201905061120460008301846111e0565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611244578082015181840152602081019050611229565b60008484015250505050565b6000601f19601f8301169050919050565b600061126c8261120a565b6112768185611215565b9350611286818560208601611226565b61128f81611250565b840191505092915050565b600060208201905081810360008301526112b48184611261565b905092915050565b6000819050919050565b6112cf816112bc565b81146112da57600080fd5b50565b6000813590506112ec816112c6565b92915050565b60006020828403121561130857611307611145565b5b6000611316848285016112dd565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061134a8261131f565b9050919050565b61135a8161133f565b82525050565b60006020820190506113756000830184611351565b92915050565b6113848161133f565b811461138f57600080fd5b50565b6000813590506113a18161137b565b92915050565b600080604083850312156113be576113bd611145565b5b60006113cc85828601611392565b92505060206113dd858286016112dd565b9150509250929050565b600080600060608486031215611400576113ff611145565b5b600061140e86828701611392565b935050602061141f86828701611392565b9250506040611430868287016112dd565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61147c82611250565b810181811067ffffffffffffffff8211171561149b5761149a611444565b5b80604052505050565b60006114ae61113b565b90506114ba8282611473565b919050565b600067ffffffffffffffff8211156114da576114d9611444565b5b6114e382611250565b9050602081019050919050565b82818337600083830152505050565b600061151261150d846114bf565b6114a4565b90508281526020810184848401111561152e5761152d61143f565b5b6115398482856114f0565b509392505050565b600082601f8301126115565761155561143a565b5b81356115668482602086016114ff565b91505092915050565b6000806040838503121561158657611585611145565b5b600083013567ffffffffffffffff8111156115a4576115a361114a565b5b6115b085828601611541565b925050602083013567ffffffffffffffff8111156115d1576115d061114a565b5b6115dd85828601611541565b9150509250929050565b6000602082840312156115fd576115fc611145565b5b600061160b84828501611392565b91505092915050565b61161d816112bc565b82525050565b60006020820190506116386000830184611614565b92915050565b611647816111d4565b811461165257600080fd5b50565b6000813590506116648161163e565b92915050565b6000806040838503121561168157611680611145565b5b600061168f85828601611392565b92505060206116a085828601611655565b9150509250929050565b600067ffffffffffffffff8211156116c5576116c4611444565b5b6116ce82611250565b9050602081019050919050565b60006116ee6116e9846116aa565b6114a4565b90508281526020810184848401111561170a5761170961143f565b5b6117158482856114f0565b509392505050565b600082601f8301126117325761173161143a565b5b81356117428482602086016116db565b91505092915050565b6000806000806080858703121561176557611764611145565b5b600061177387828801611392565b945050602061178487828801611392565b9350506040611795878288016112dd565b925050606085013567ffffffffffffffff8111156117b6576117b561114a565b5b6117c28782880161171d565b91505092959194509250565b600080604083850312156117e5576117e4611145565b5b60006117f385828601611392565b925050602061180485828601611392565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061185557607f821691505b6020821081036118685761186761180e565b5b50919050565b7f4e4f545f415554484f52495a4544000000000000000000000000000000000000600082015250565b60006118a4600e83611215565b91506118af8261186e565b602082019050919050565b600060208201905081810360008301526118d381611897565b9050919050565b7f57524f4e475f46524f4d00000000000000000000000000000000000000000000600082015250565b6000611910600a83611215565b915061191b826118da565b602082019050919050565b6000602082019050818103600083015261193f81611903565b9050919050565b7f494e56414c49445f524543495049454e54000000000000000000000000000000600082015250565b600061197c601183611215565b915061198782611946565b602082019050919050565b600060208201905081810360008301526119ab8161196f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119ec826112bc565b9150600082036119ff576119fe6119b2565b5b600182039050919050565b6000611a15826112bc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a4757611a466119b2565b5b600182019050919050565b600082825260208201905092915050565b50565b6000611a73600083611a52565b9150611a7e82611a63565b600082019050919050565b6000608082019050611a9e6000830186611351565b611aab6020830185611351565b611ab86040830184611614565b8181036060830152611ac981611a66565b9050949350505050565b600081519050611ae28161117b565b92915050565b600060208284031215611afe57611afd611145565b5b6000611b0c84828501611ad3565b91505092915050565b7f554e534146455f524543495049454e5400000000000000000000000000000000600082015250565b6000611b4b601083611215565b9150611b5682611b15565b602082019050919050565b60006020820190508181036000830152611b7a81611b3e565b9050919050565b7f414c52454144595f494e495449414c495a454400000000000000000000000000600082015250565b6000611bb7601383611215565b9150611bc282611b81565b602082019050919050565b60006020820190508181036000830152611be681611baa565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611c4f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611c12565b611c598683611c12565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611c96611c91611c8c846112bc565b611c71565b6112bc565b9050919050565b6000819050919050565b611cb083611c7b565b611cc4611cbc82611c9d565b848454611c1f565b825550505050565b600090565b611cd9611ccc565b611ce4818484611ca7565b505050565b5b81811015611d0857611cfd600082611cd1565b600181019050611cea565b5050565b601f821115611d4d57611d1e81611bed565b611d2784611c02565b81016020851015611d36578190505b611d4a611d4285611c02565b830182611ce9565b50505b505050565b600082821c905092915050565b6000611d7060001984600802611d52565b1980831691505092915050565b6000611d898383611d5f565b9150826002028217905092915050565b611da28261120a565b67ffffffffffffffff811115611dbb57611dba611444565b5b611dc5825461183d565b611dd0828285611d0c565b600060209050601f831160018114611e035760008415611df1578287015190505b611dfb8582611d7d565b865550611e63565b601f198416611e1186611bed565b60005b82811015611e3957848901518255600182019150602085019450602081019050611e14565b86831015611e565784890151611e52601f891682611d5f565b8355505b6001600288020188555050505b505050505050565b7f4e4f545f4d494e54454400000000000000000000000000000000000000000000600082015250565b6000611ea1600a83611215565b9150611eac82611e6b565b602082019050919050565b60006020820190508181036000830152611ed081611e94565b9050919050565b7f5a45524f5f414444524553530000000000000000000000000000000000000000600082015250565b6000611f0d600c83611215565b9150611f1882611ed7565b602082019050919050565b60006020820190508181036000830152611f3c81611f00565b9050919050565b600081519050919050565b6000611f5982611f43565b611f638185611a52565b9350611f73818560208601611226565b611f7c81611250565b840191505092915050565b6000608082019050611f9c6000830187611351565b611fa96020830186611351565b611fb66040830185611614565b8181036060830152611fc88184611f4e565b90509594505050505056fea2646970667358221220a575ff968e703ad7adb2e04e10963e6e381b50462e39592279a284acf2f13a8b64736f6c63430008130033";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC721> {
    return super.deploy(overrides || {}) as Promise<MockERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockERC721 {
    return super.attach(address) as MockERC721;
  }
  override connect(signer: Signer): MockERC721__factory {
    return super.connect(signer) as MockERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new utils.Interface(_abi) as MockERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721 {
    return new Contract(address, _abi, signerOrProvider) as MockERC721;
  }
}
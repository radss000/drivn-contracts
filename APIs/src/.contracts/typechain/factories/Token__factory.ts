/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Token, TokenInterface } from '../Token'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000d4738038062000d4783398101604081905262000034916200020c565b8181600362000044838262000304565b50600462000053828262000304565b50505062000074336b033b2e3c9fd0803ce80000006200007c60201b60201c565b5050620003f8565b6001600160a01b038216620000d75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000eb9190620003d0565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200016f57600080fd5b81516001600160401b03808211156200018c576200018c62000147565b604051601f8301601f19908116603f01168101908282118183101715620001b757620001b762000147565b81604052838152602092508683858801011115620001d457600080fd5b600091505b83821015620001f85785820183015181830184015290820190620001d9565b600093810190920192909252949350505050565b600080604083850312156200022057600080fd5b82516001600160401b03808211156200023857600080fd5b62000246868387016200015d565b935060208501519150808211156200025d57600080fd5b506200026c858286016200015d565b9150509250929050565b600181811c908216806200028b57607f821691505b602082108103620002ac57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200014257600081815260208120601f850160051c81016020861015620002db5750805b601f850160051c820191505b81811015620002fc57828155600101620002e7565b505050505050565b81516001600160401b0381111562000320576200032062000147565b620003388162000331845462000276565b84620002b2565b602080601f831160018114620003705760008415620003575750858301515b600019600386901b1c1916600185901b178555620002fc565b600085815260208120601f198616915b82811015620003a15788860151825594840194600190910190840162000380565b5085821015620003c05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620003f257634e487b7160e01b600052601160045260246000fd5b92915050565b61093f80620004086000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014157806370a082311461015657806395d89b411461017f578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101c0565b6040516100ce9190610789565b60405180910390f35b6100ea6100e53660046107f3565b610252565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a36600461081d565b61026c565b604051601281526020016100ce565b6100ea61013c3660046107f3565b610290565b61015461014f3660046107f3565b6102b2565b005b6100fe610164366004610859565b6001600160a01b031660009081526020819052604090205490565b6100c16102c0565b6100ea6101953660046107f3565b6102cf565b6100ea6101a83660046107f3565b61034f565b6100fe6101bb36600461087b565b61035d565b6060600380546101cf906108ae565b80601f01602080910402602001604051908101604052809291908181526020018280546101fb906108ae565b80156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b5050505050905090565b600033610260818585610388565b60019150505b92915050565b60003361027a8582856104ac565b610285858585610526565b506001949350505050565b6000336102608185856102a3838361035d565b6102ad91906108e8565b610388565b6102bc82826106ca565b5050565b6060600480546101cf906108ae565b600033816102dd828661035d565b9050838110156103425760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102858286868403610388565b600033610260818585610526565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103ea5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610339565b6001600160a01b03821661044b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610339565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104b8848461035d565b9050600019811461052057818110156105135760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610339565b6105208484848403610388565b50505050565b6001600160a01b03831661058a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610339565b6001600160a01b0382166105ec5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610339565b6001600160a01b038316600090815260208190526040902054818110156106645760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610339565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610520565b6001600160a01b0382166107205760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610339565b806002600082825461073291906108e8565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156107b65785810183015185820160400152820161079a565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146107ee57600080fd5b919050565b6000806040838503121561080657600080fd5b61080f836107d7565b946020939093013593505050565b60008060006060848603121561083257600080fd5b61083b846107d7565b9250610849602085016107d7565b9150604084013590509250925092565b60006020828403121561086b57600080fd5b610874826107d7565b9392505050565b6000806040838503121561088e57600080fd5b610897836107d7565b91506108a5602084016107d7565b90509250929050565b600181811c908216806108c257607f821691505b6020821081036108e257634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026657634e487b7160e01b600052601160045260246000fdfea2646970667358221220689a99710d1c64885c7bcf83013ab3c7fe86e15a2303502401f8fa8e3570b85164736f6c63430008120033'

export class Token__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0])
    } else {
      super(...args)
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(name, symbol, overrides || {}) as Promise<Token>
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {})
  }
  attach(address: string): Token {
    return super.attach(address) as Token
  }
  connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token
  }
}

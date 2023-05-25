/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { BurnNFT, BurnNFTInterface } from '../BurnNFT'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'baseURI',
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
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
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
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
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
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
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
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
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
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
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
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
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
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
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
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
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
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'allowedAddress',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'allowed',
        type: 'bool',
      },
    ],
    name: 'setAllowed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'baseURI_',
        type: 'string',
      },
    ],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
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
    name: 'tokenIdCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '_value',
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
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
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
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
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
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162001fe738038062001fe783398101604081905262000034916200021c565b828260006200004483826200033c565b5060016200005382826200033c565b505050620000706200006a6200008460201b60201c565b62000088565b6200007b81620000da565b50505062000408565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620000e4620000f6565b600c620000f282826200033c565b5050565b600a546001600160a01b03163314620001555760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200017f57600080fd5b81516001600160401b03808211156200019c576200019c62000157565b604051601f8301601f19908116603f01168101908282118183101715620001c757620001c762000157565b81604052838152602092508683858801011115620001e457600080fd5b600091505b83821015620002085785820183015181830184015290820190620001e9565b600093810190920192909252949350505050565b6000806000606084860312156200023257600080fd5b83516001600160401b03808211156200024a57600080fd5b62000258878388016200016d565b945060208601519150808211156200026f57600080fd5b6200027d878388016200016d565b935060408601519150808211156200029457600080fd5b50620002a3868287016200016d565b9150509250925092565b600181811c90821680620002c257607f821691505b602082108103620002e357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200033757600081815260208120601f850160051c81016020861015620003125750805b601f850160051c820191505b8181101562000333578281556001016200031e565b5050505b505050565b81516001600160401b0381111562000358576200035862000157565b6200037081620003698454620002ad565b84620002e9565b602080601f831160018114620003a857600084156200038f5750858301515b600019600386901b1c1916600185901b17855562000333565b600085815260208120601f198616915b82811015620003d957888601518255948401946001909101908401620003b8565b5085821015620003f85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611bcf80620004186000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80636a627842116100c3578063a22cb4651161007c578063a22cb465146102c2578063b88d4fde146102d5578063babcc539146102e8578063c87b56dd1461030b578063e985e9c51461031e578063f2fde38b1461035a57600080fd5b80636a6278421461027157806370a0823114610284578063715018a6146102975780638da5cb5b1461029f57806395d89b41146102b057806398bdf6f5146102b857600080fd5b80632f745c59116101155780632f745c59146101ff57806342842e0e146102125780634697f05d146102255780634f6ccce71461023857806355f804b31461024b5780636352211e1461025e57600080fd5b806301ffc9a71461015d57806306fdde0314610185578063081812fc1461019a578063095ea7b3146101c557806318160ddd146101da57806323b872dd146101ec575b600080fd5b61017061016b3660046115a6565b61036d565b60405190151581526020015b60405180910390f35b61018d610398565b60405161017c9190611613565b6101ad6101a8366004611626565b61042a565b6040516001600160a01b03909116815260200161017c565b6101d86101d3366004611656565b610451565b005b6008545b60405190815260200161017c565b6101d86101fa366004611680565b61056b565b6101de61020d366004611656565b61059c565b6101d8610220366004611680565b610632565b6101d86102333660046116bc565b61064d565b6101de610246366004611626565b610680565b6101d8610259366004611784565b610713565b6101ad61026c366004611626565b61072b565b6101de61027f3660046117cd565b61078b565b6101de6102923660046117cd565b610832565b6101d86108b8565b600a546001600160a01b03166101ad565b61018d6108cc565b600b546101de9081565b6101d86102d03660046116bc565b6108db565b6101d86102e33660046117e8565b6108e6565b6101706102f63660046117cd565b600d6020526000908152604090205460ff1681565b61018d610319366004611626565b61091e565b61017061032c366004611864565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101d86103683660046117cd565b610985565b60006001600160e01b0319821663780e9d6360e01b14806103925750610392826109fe565b92915050565b6060600080546103a790611897565b80601f01602080910402602001604051908101604052809291908181526020018280546103d390611897565b80156104205780601f106103f557610100808354040283529160200191610420565b820191906000526020600020905b81548152906001019060200180831161040357829003601f168201915b5050505050905090565b600061043582610a4e565b506000908152600460205260409020546001600160a01b031690565b600061045c8261072b565b9050806001600160a01b0316836001600160a01b0316036104ce5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806104ea57506104ea813361032c565b61055c5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016104c5565b6105668383610aad565b505050565b6105753382610b1b565b6105915760405162461bcd60e51b81526004016104c5906118d1565b610566838383610b9a565b60006105a783610832565b82106106095760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104c5565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b610566838383604051806020016040528060008152506108e6565b610655610d0b565b6001600160a01b03919091166000908152600d60205260409020805460ff1916911515919091179055565b600061068b60085490565b82106106ee5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104c5565b600882815481106107015761070161191e565b90600052602060002001549050919050565b61071b610d0b565b600c6107278282611982565b5050565b6000818152600260205260408120546001600160a01b0316806103925760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104c5565b336000908152600d602052604081205460ff166108085760405162461bcd60e51b815260206004820152603560248201527f4275726e4e46543a2061646472657373206973206e6f7420616c6c6f776564206044820152743a379031b0b636103a3434b990333ab731ba34b7b760591b60648201526084016104c5565b610816600b80546001019055565b6000610821600b5490565b90506103928382610d65565b919050565b60006001600160a01b03821661089c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104c5565b506001600160a01b031660009081526003602052604090205490565b6108c0610d0b565b6108ca6000610efe565b565b6060600180546103a790611897565b610727338383610f50565b6108f03383610b1b565b61090c5760405162461bcd60e51b81526004016104c5906118d1565b6109188484848461101e565b50505050565b606061092982610a4e565b6000610933611051565b90506000815111610953576040518060200160405280600081525061097e565b8061095d84611060565b60405160200161096e929190611a42565b6040516020818303038152906040525b9392505050565b61098d610d0b565b6001600160a01b0381166109f25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104c5565b6109fb81610efe565b50565b60006001600160e01b031982166380ac58cd60e01b1480610a2f57506001600160e01b03198216635b5e139f60e01b145b8061039257506301ffc9a760e01b6001600160e01b0319831614610392565b6000818152600260205260409020546001600160a01b03166109fb5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104c5565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610ae28261072b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b278361072b565b9050806001600160a01b0316846001600160a01b03161480610b6e57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610b925750836001600160a01b0316610b878461042a565b6001600160a01b0316145b949350505050565b826001600160a01b0316610bad8261072b565b6001600160a01b031614610bd35760405162461bcd60e51b81526004016104c590611a71565b6001600160a01b038216610c355760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104c5565b610c4283838360016110f3565b826001600160a01b0316610c558261072b565b6001600160a01b031614610c7b5760405162461bcd60e51b81526004016104c590611a71565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600a546001600160a01b031633146108ca5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c5565b6001600160a01b038216610dbb5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104c5565b6000818152600260205260409020546001600160a01b031615610e205760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104c5565b610e2e6000838360016110f3565b6000818152600260205260409020546001600160a01b031615610e935760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104c5565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610fb15760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104c5565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611029848484610b9a565b61103584848484611227565b6109185760405162461bcd60e51b81526004016104c590611ab6565b6060600c80546103a790611897565b6060600061106d83611328565b600101905060008167ffffffffffffffff81111561108d5761108d6116f8565b6040519080825280601f01601f1916602001820160405280156110b7576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846110c157509392505050565b60018111156111625760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b60648201526084016104c5565b816001600160a01b0385166111be576111b981600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6111e1565b836001600160a01b0316856001600160a01b0316146111e1576111e18582611400565b6001600160a01b0384166111fd576111f88161149d565b611220565b846001600160a01b0316846001600160a01b03161461122057611220848261154c565b5050505050565b60006001600160a01b0384163b1561131d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061126b903390899088908890600401611b08565b6020604051808303816000875af19250505080156112a6575060408051601f3d908101601f191682019092526112a391810190611b45565b60015b611303573d8080156112d4576040519150601f19603f3d011682016040523d82523d6000602084013e6112d9565b606091505b5080516000036112fb5760405162461bcd60e51b81526004016104c590611ab6565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b92565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106113675772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611393576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106113b157662386f26fc10000830492506010015b6305f5e10083106113c9576305f5e100830492506008015b61271083106113dd57612710830492506004015b606483106113ef576064830492506002015b600a83106103925760010192915050565b6000600161140d84610832565b6114179190611b62565b60008381526007602052604090205490915080821461146a576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906114af90600190611b62565b600083815260096020526040812054600880549394509092849081106114d7576114d761191e565b9060005260206000200154905080600883815481106114f8576114f861191e565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061153057611530611b83565b6001900381819060005260206000200160009055905550505050565b600061155783610832565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b0319811681146109fb57600080fd5b6000602082840312156115b857600080fd5b813561097e81611590565b60005b838110156115de5781810151838201526020016115c6565b50506000910152565b600081518084526115ff8160208601602086016115c3565b601f01601f19169290920160200192915050565b60208152600061097e60208301846115e7565b60006020828403121561163857600080fd5b5035919050565b80356001600160a01b038116811461082d57600080fd5b6000806040838503121561166957600080fd5b6116728361163f565b946020939093013593505050565b60008060006060848603121561169557600080fd5b61169e8461163f565b92506116ac6020850161163f565b9150604084013590509250925092565b600080604083850312156116cf57600080fd5b6116d88361163f565b9150602083013580151581146116ed57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611729576117296116f8565b604051601f8501601f19908116603f01168101908282118183101715611751576117516116f8565b8160405280935085815286868601111561176a57600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561179657600080fd5b813567ffffffffffffffff8111156117ad57600080fd5b8201601f810184136117be57600080fd5b610b928482356020840161170e565b6000602082840312156117df57600080fd5b61097e8261163f565b600080600080608085870312156117fe57600080fd5b6118078561163f565b93506118156020860161163f565b925060408501359150606085013567ffffffffffffffff81111561183857600080fd5b8501601f8101871361184957600080fd5b6118588782356020840161170e565b91505092959194509250565b6000806040838503121561187757600080fd5b6118808361163f565b915061188e6020840161163f565b90509250929050565b600181811c908216806118ab57607f821691505b6020821081036118cb57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b601f82111561056657600081815260208120601f850160051c8101602086101561195b5750805b601f850160051c820191505b8181101561197a57828155600101611967565b505050505050565b815167ffffffffffffffff81111561199c5761199c6116f8565b6119b0816119aa8454611897565b84611934565b602080601f8311600181146119e557600084156119cd5750858301515b600019600386901b1c1916600185901b17855561197a565b600085815260208120601f198616915b82811015611a14578886015182559484019460019091019084016119f5565b5085821015611a325787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008351611a548184602088016115c3565b835190830190611a688183602088016115c3565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b3b908301846115e7565b9695505050505050565b600060208284031215611b5757600080fd5b815161097e81611590565b8181038181111561039257634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122003fe39392394d92ffb38a03c1cd22c6724d424344b24f9e6a0d709916b92e1b064736f6c63430008120033'

export class BurnNFT__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0])
    } else {
      super(...args)
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BurnNFT> {
    return super.deploy(name_, symbol_, baseURI, overrides || {}) as Promise<BurnNFT>
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, baseURI, overrides || {})
  }
  attach(address: string): BurnNFT {
    return super.attach(address) as BurnNFT
  }
  connect(signer: Signer): BurnNFT__factory {
    return super.connect(signer) as BurnNFT__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): BurnNFTInterface {
    return new utils.Interface(_abi) as BurnNFTInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BurnNFT {
    return new Contract(address, _abi, signerOrProvider) as BurnNFT
  }
}
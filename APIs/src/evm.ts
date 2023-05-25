import {
  Chain,
  Contracts,
  defineEvm,
  universalRpc,
  contract,
  Multicall,
  contractsFiller,
  chainIdsFiller,
} from '@gotbit/evm'
import { nodeAdapter } from '@gotbit/evm-node'

import type {
  BurnNFT,
  BurnNFTManagement,
  Drivn,
  EarnNFT,
  EarnNFTManagement,
  ExchangePool,
  GTT,
  PreSales,
  PrivateSales,
  Vesting,
} from '@/.contracts/custom/typechain'
import abis from '@/.contracts/custom/abis.json'

export const useEvm = defineEvm({
  modules: {
    ...Chain(universalRpc()),
    ...Contracts({
      contractsJSON: contractsFiller,
      chainIds: chainIdsFiller,
      DEFAULT_CHAINID: '97',
      abis,
      contracts: {
        shared: {
          anyGtt: contract('GTT', {} as GTT, true),
          anyDrivn: contract('Drivn', {} as Drivn, true),
          anyExchangePool: contract('ExchangePool', {} as ExchangePool, true),
          anyVesting: contract('Vesting', {} as Vesting, true),
          anyPreSales: contract('PreSales', {} as PreSales, true),
          anyPrivateSales: contract('PrivateSales', {} as PrivateSales, true),
          anyBurnNFT: contract('BurnNFT', {} as BurnNFT, true),
          anyEarnNFT: contract('EarnNFT', {} as EarnNFT, true),
          anyBurnNFTManagement: contract(
            'BurnNFTManagement',
            {} as BurnNFTManagement,
            true
          ),
          anyEarnNFTManagement: contract(
            'EarnNFTManagement',
            {} as EarnNFTManagement,
            true
          ),
          // anyPrivateSales: contract('', {} as PrivateSales, true),
        },
        on: {},
      },
    }),
    ...Multicall(),
  },
  adapter: nodeAdapter({
    PRIVATE: {
      TEST: [],
      MAIN: [],
    },
  }),
})

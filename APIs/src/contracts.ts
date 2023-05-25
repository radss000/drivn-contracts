import { isChainId } from '@gotbit/evm'

import { env } from '@/env'
import { useEvm } from '@/evm'

const {
  contracts: { useContracts: useContracts_ },
} = useEvm()

export const useContracts = () => {
  const { CHAIN_ID } = env
  if (!isChainId(CHAIN_ID)) throw new Error('Unsupported chainId')

  const {
    anyDrivn,
    anyExchangePool,
    anyGtt,
    anyVesting,
    anyPreSales,
    anyPrivateSales,
    anyBurnNFT,
    anyEarnNFT,
    anyBurnNFTManagement,
    anyEarnNFTManagement,
  } = useContracts_(undefined, CHAIN_ID)

  return {
    drivn: anyDrivn(env.DRIVN_ADDRESS),
    gtt: anyGtt(env.GTT_ADDRESS),
    vesting: anyVesting(env.VESTING_ADDRESS),
    exchangePool: anyExchangePool(env.EXCHANGE_POOL_ADDRESS),
    preSales: anyPreSales(env.PRE_SALES_ADDRESS),
    privateSales: anyPrivateSales(env.PRIVATE_SALES_ADDRESS),
    burnNFT: anyBurnNFT(env.BURN_NFT_ADDRESS),
    earnNFT: anyEarnNFT(env.EARN_NFT_ADDRESS),
    burnNFTManagement: anyBurnNFTManagement(env.BURN_NFT_MANAGEMENT_ADDRESS),
    earnNFTManagement: anyEarnNFTManagement(env.EARN_NFT_ADDRESS),
  }
}

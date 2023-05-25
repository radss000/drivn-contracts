import { z } from 'zod'

import * as dotenv from 'dotenv'
dotenv.config()

export const env = z
  .object({
    CHAIN_ID: z.string(),

    DRIVN_ADDRESS: z.string(),
    GTT_ADDRESS: z.string(),

    VESTING_ADDRESS: z.string(),
    EXCHANGE_POOL_ADDRESS: z.string(),

    PRE_SALES_ADDRESS: z.string(),
    PRIVATE_SALES_ADDRESS: z.string(),

    EARN_NFT_ADDRESS: z.string(),
    EARN_NFT_MANAGEMENT_ADDRESS: z.string(),

    BURN_NFT_ADDRESS: z.string(),
    BURN_NFT_MANAGEMENT_ADDRESS: z.string(),
  })
  .parse(process.env)

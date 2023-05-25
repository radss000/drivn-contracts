import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Initialize contract')
  .body(
    z.object({
      earnNFT: z.string(),
      gtt: z.string(),
      carPrice: z.number(),
      bikePrice: z.number(),
      scooterPrice: z.number(),
      dailyPowerCap: z.number(),
      dailyTokenCap: z.number(),
      dailyClaimLimit: z.number(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const {
      earnNFT,
      gtt,
      carPrice,
      bikePrice,
      scooterPrice,
      dailyPowerCap,
      dailyTokenCap,
      dailyClaimLimit,
    } = req.body
    const tx = await earnNFTManagement.populateTransaction.initialize(
      earnNFT,
      gtt,
      carPrice,
      bikePrice,
      scooterPrice,
      dailyPowerCap,
      dailyTokenCap,
      dailyClaimLimit
    )

    res.send(data(convertBN(tx)))
  })

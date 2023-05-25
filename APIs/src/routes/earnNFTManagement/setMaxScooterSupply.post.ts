import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Sets the max supply for a scooter NFT')
  .body(z.object({ supply: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const { supply } = req.body
    const tx = await earnNFTManagement.populateTransaction.setMaxScooterSupply(supply)

    res.send(data(convertBN(tx)))
  })

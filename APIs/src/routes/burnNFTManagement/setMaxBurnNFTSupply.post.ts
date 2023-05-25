import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Sets max burn NFT supply.')
  .body(z.object({ amount: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFTManagement } = useContracts()
    const { amount } = req.body
    const tx = await burnNFTManagement.populateTransaction.setMaxBurnNFTSupply(amount)

    res.send(data(convertBN(tx)))
  })

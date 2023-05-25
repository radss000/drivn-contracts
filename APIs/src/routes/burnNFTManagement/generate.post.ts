import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Generating pseudo coins for burn nft')
  .body(z.object({ tokenId: z.number(), amount: z.number(), allowSig: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFTManagement } = useContracts()
    const { tokenId, amount, allowSig } = req.body
    const tx = await burnNFTManagement.populateTransaction.generate(
      tokenId,
      amount,
      allowSig
    )

    res.send(data(convertBN(tx)))
  })

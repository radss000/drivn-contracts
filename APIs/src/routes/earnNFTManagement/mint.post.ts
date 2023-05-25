import { z } from 'zod'
import { defineHandler } from 'vort'
import { PopulatedTransaction, Signer, Wallet, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Buy an NFT of a certain type')
  .body(z.object({ type: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()

    const { type } = req.body
    const tx = await earnNFTManagement.populateTransaction.mint(type)

    res.send(data(convertBN(tx)))
  })

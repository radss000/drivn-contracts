import { z } from 'zod'
import { defineHandler } from 'vort'
import { PopulatedTransaction, Signer, Wallet, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Minting the token on certain address')
  .body(z.object({ owner: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()

    const { owner } = req.body
    const tx = await burnNFT.populateTransaction.mint(owner)

    res.send(data(convertBN(tx)))
  })

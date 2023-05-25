import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Delegates ownership to another account')
  .body(z.object({ owner: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { owner } = req.body
    const tx = await earnNFT.populateTransaction.transferOwnership(owner)

    res.send(data(convertBN(tx)))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Delegates ownership to another address.')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { account } = req.body
    const tx = await privateSales.populateTransaction.transferOwnership(account)

    res.send(data(convertBN(tx)))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Transfer tokens from selected address to another with spending allowance')
  .body(z.object({ from: z.string(), to: z.string(), amount: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { from, to, amount } = req.body
    const tx = await exchangePool.populateTransaction.transferFrom(from, to, amount)

    res.send(data(convertBN(tx)))
  })

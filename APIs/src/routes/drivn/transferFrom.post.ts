import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Transfers `amount` of tokens `from` account `to` another selected')
  .body(z.object({ from: z.string(), to: z.string(), amount: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { drivn } = useContracts()
    const { from, to, amount } = req.body
    const tx = await drivn.populateTransaction.transferFrom(from, to, amount)

    res.send(data(convertBN(tx)))
  })

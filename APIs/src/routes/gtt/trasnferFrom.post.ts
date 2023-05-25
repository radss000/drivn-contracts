import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Tranfer `amount` of tokens `from` accout `to` account')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ from: z.string(), to: z.string(), amount: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { from, to, amount } = req.body

    const tx = await gtt.populateTransaction.transferFrom(from, to, amount)

    res.send(data(convertBN(tx)))
  })

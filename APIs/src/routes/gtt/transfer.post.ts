import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Transfer `amount` of tokens from caller to `to` account')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ to: z.string(), amount: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { to, amount } = req.body

    const tx = await gtt.populateTransaction.transfer(to, amount)

    res.send(data(convertBN(tx)))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('transfer tokens `amount` from caller `to` account')
  .body(z.object({ to: z.string(), amount: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { drivn } = useContracts()
    const { to, amount } = req.body
    const tx = await drivn.populateTransaction.transfer(to, amount)

    res.send(data(convertBN(tx)))
  })

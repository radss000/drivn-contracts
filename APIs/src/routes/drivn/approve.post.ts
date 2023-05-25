import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('approve()')
  .body(z.object({ spender: z.string(), value: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { drivn } = useContracts()

    const { spender, value } = req.body
    const tx = await drivn.populateTransaction.approve(spender, value)

    res.send(data(convertBN(tx)))
  })

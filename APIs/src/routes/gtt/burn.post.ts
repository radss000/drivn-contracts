import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('burns `amount` of tokens `from` selected user account')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ from: z.string(), amount: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { from, amount } = req.body

    const tx = await gtt.populateTransaction.burn(from, amount)

    res.send(data(convertBN(tx)))
  })

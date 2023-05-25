import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Allows `spender` to transferFrom `amount` tokens from caller')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ spender: z.string(), amount: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { spender, amount } = req.body

    const tx = await gtt.populateTransaction.approve(spender, amount)

    res.send(data(convertBN(tx)))
  })

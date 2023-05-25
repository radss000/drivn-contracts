import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('function to claim all left tokens (only owner)')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ recipient: z.string(), amount: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { recipient, amount } = req.body

    const tx = await vesting.populateTransaction.withdraw(recipient, amount)

    res.send(data(convertBN(tx)))
  })

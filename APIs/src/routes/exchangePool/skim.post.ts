import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('force balances to match reserves')
  .body(
    z.object({
      to: z.string(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { to } = req.body
    const tx = await exchangePool.populateTransaction.skim(to)

    res.send(data(convertBN(tx)))
  })

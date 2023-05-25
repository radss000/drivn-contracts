import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Transfers tokens from msg.sender to selected address')
  .body(z.object({ to: z.string(), amount: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { to, amount } = req.body
    const tx = await exchangePool.populateTransaction.transfer(to, amount)

    res.send(data(convertBN(tx)))
  })

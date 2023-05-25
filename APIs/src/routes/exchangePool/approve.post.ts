import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Approves tokens from msg.sender to selected spender')
  .body(z.object({ spender: z.string(), value: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { spender, value } = req.body
    const tx = await exchangePool.populateTransaction.approve(spender, value)

    res.send(data(convertBN(tx)))
  })

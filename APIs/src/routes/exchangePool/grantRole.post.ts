import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('External function allowing only admin to grant roles')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ role: z.string(), account: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { role, account } = req.body

    const tx = await exchangePool.populateTransaction.grantRole(role, account)

    res.send(data(convertBN(tx)))
  })

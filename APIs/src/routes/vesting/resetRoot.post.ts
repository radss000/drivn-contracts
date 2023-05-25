import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('function to reset ROOT if allocations changed')
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ root: z.string(), leaves: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { root, leaves } = req.body

    const tx = await vesting.populateTransaction.resetROOT(root, leaves)

    res.send(data(convertBN(tx)))
  })

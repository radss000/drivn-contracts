import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Claims users tokens from a single round')
  .body(
    z.object({
      allocations: z.string().array(),
      proofs: z.string().array(),
      targetAmount: z.string(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { allocations, proofs, targetAmount } = req.body
    const tx = await vesting.populateTransaction.claimAll(
      allocations,
      proofs,
      targetAmount
    )

    res.send(data(convertBN(tx)))
  })

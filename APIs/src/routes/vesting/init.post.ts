import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('function to initialize vesting (only owner)')
  .body(
    z.object({
      startTimesatamp: z.string(),
      leaves: z.string(),
      root: z.string(),
      rounds: z
        .object({
          name: z.string(),
          periods: z
            .object({
              startTimestamp: z.string(),
              duration: z.string(),
              linearUnits: z.string(),
              percentageD: z.string(),
            })
            .array(),
        })
        .array(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { startTimesatamp, leaves, root, rounds } = req.body
    const tx = await vesting.populateTransaction.init(
      startTimesatamp,
      leaves,
      root,
      rounds
    )

    res.send(data(convertBN(tx)))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns `account` claimed amount for selected `roundId`')
  .body(z.object({ account: z.string(), roundId: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { account, roundId } = req.body
    const claimed = await vesting.claimed(account, roundId)
    res.send(data(claimed.toString()))
  })

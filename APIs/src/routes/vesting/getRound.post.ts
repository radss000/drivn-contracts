import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { BigNumber } from 'ethers'

export default defineHandler()
  .description('Returns round information for selected `roundId`')
  .body(z.object({ roundId: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { roundId } = req.body
    const roundInfo = await vesting.getRound(roundId)
    res.send(data(roundInfo.toString()))
  })

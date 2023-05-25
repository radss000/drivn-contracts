import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { BigNumber } from 'ethers'

export default defineHandler()
  .description('Returns selected `roundId` information')
  .output(WithErrorSchema(z.string()))
  .body(z.object({ roundId: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { roundId } = req.body
    const roundInfo = await vesting.rounds(roundId)
    res.send(data(roundInfo.toString()))
  })

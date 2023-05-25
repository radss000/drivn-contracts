import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns the daily claimed tokens (takes timestamp and user address as arguments)'
  )
  .body(z.object({ time: z.number(), account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const { time, account } = req.body
    const tokens = await earnNFTManagement.dailyClaimedTokens(time, account)
    res.send(data(tokens.toString()))
  })

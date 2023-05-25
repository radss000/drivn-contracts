import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('balance of `account`')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { account } = req.body
    const balance = await gtt.balanceOf(account)
    res.send(data(balance.toString()))
  })

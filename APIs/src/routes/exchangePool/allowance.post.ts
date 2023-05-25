import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns token amount allowance from `owner` for `spender`')
  .body(z.object({ owner: z.string(), spender: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { owner, spender } = req.body
    const allowance = await exchangePool.allowance(owner, spender)
    res.send(data(allowance.toString()))
  })

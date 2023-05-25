import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns bool the `account` has selected `role`')
  .body(z.object({ account: z.string(), role: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { account, role } = req.body
    const hasRole = await exchangePool.hasRole(role, account)

    res.send(data(hasRole.toString()))
  })

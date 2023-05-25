import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns `true` if `account` has been granted `role`.')
  .body(z.object({ account: z.string(), role: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { account, role } = req.body
    const hasRole = await gtt.hasRole(role, account)
    res.send(data(hasRole.toString()))
  })

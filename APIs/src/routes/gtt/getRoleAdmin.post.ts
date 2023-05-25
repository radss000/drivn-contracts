import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a roles admin, use {_setRoleAdmin}.'
  )
  .body(z.object({ role: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { role } = req.body
    const roleAdmin = await gtt.getRoleAdmin(role)
    res.send(data(roleAdmin.toString()))
  })

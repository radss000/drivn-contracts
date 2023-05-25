import { defineHandler } from 'vort'
import { z } from 'zod'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('DEFAULT_ADMIN_ROLE()')
  .output(WithErrorSchema(z.string()))
  .handler(async (_, res) => {
    const { gtt } = useContracts()
    const role = await gtt.DEFAULT_ADMIN_ROLE()
    res.send(data(role.toString()))
  })

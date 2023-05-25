import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns flag if a certain account is allowed to participate in the private sales'
  )
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { account } = req.body
    const flag = await privateSales.isAllowed(account)
    res.send(data(flag.toString()))
  })

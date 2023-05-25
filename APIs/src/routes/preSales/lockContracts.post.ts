import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns addresses of all time lock contracts for the current user')
  .body(z.object({ account: z.string(), index: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { preSales } = useContracts()
    const { account, index } = req.body
    const addresses = await preSales.lockContracts(account, index)
    res.send(data(addresses.toString()))
  })

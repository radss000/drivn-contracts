import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('LIQUIDITY_PROVIDER_ROLE()')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const roleHash = await exchangePool.LIQUIDITY_PROVIDER_ROLE()
    res.send(data(roleHash.toString()))
  })

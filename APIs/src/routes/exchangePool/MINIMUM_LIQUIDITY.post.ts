import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('MINIMUM_LIQUIDITY()')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const MINIMUM_LIQUIDITY = await exchangePool.MINIMUM_LIQUIDITY()
    res.send(data(MINIMUM_LIQUIDITY.toString()))
  })

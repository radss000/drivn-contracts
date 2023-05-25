import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns `reserve0` of token0 and `reserve1` of token1 current in exchange pool'
  )
  .output(
    z.object({
      _reserve0: z.string(),
      _reserve1: z.string(),
      _blockTimestampLast: z.number(),
    })
  )
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { _reserve0, _reserve1, _blockTimestampLast } = await exchangePool.getReserves()
    res.send({
      _reserve0: _reserve0.toString(),
      _reserve1: _reserve1.toString(),
      _blockTimestampLast,
    })
  })

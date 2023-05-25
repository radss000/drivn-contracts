import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns amountIn of swap for selected `amountOut`, `resserveIn` and `reserveOut`'
  )
  .body(
    z.object({ amountOut: z.string(), reserveIn: z.string(), reserveOut: z.string() })
  )
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { amountOut, reserveIn, reserveOut } = req.body
    const amountIn = await exchangePool.getAmountIn(amountOut, reserveIn, reserveOut)
    res.send(data(amountIn.toString()))
  })

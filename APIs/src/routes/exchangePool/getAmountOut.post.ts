import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns amountOut of swap for selected `amountIn`, `resserveIn` and `reserveOut`'
  )
  .body(z.object({ amountIn: z.string(), reserveIn: z.string(), reserveOut: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(async (_, res, handler) => {
    await handler()
  })
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { amountIn, reserveIn, reserveOut } = req.body
    const amountOut = await exchangePool.getAmountOut(amountIn, reserveIn, reserveOut)
    res.send(data(amountOut.toString()))
  })

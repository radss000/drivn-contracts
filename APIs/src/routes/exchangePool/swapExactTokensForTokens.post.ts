import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Swaps exact amount of token for > amountOutMin amount of second token')
  .body(
    z.object({
      amountIn: z.string(),
      amountOutMin: z.string(),
      path: z.string().array(),
      to: z.string(),
      deadline: z.string(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { amountIn, amountOutMin, path, to, deadline } = req.body
    const tx = await exchangePool.populateTransaction.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      path,
      to,
      deadline
    )

    res.send(data(convertBN(tx)))
  })

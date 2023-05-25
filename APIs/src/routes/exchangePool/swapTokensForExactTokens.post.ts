import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Swaps some amount for exact amount out')
  .body(
    z.object({
      amountOut: z.string(),
      amountInMax: z.string(),
      path: z.string().array(),
      to: z.string(),
      deadline: z.string(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { amountOut, amountInMax, path, to, deadline } = req.body
    const tx = await exchangePool.populateTransaction.swapTokensForExactTokens(
      amountOut,
      amountInMax,
      path,
      to,
      deadline
    )

    res.send(data(convertBN(tx)))
  })

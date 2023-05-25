import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Adding both tokens to the liquidity pool')
  .body(
    z.object({
      amountADesired: z.string(),
      amountBDesired: z.string(),
      amountAMin: z.string(),
      amountBMin: z.string(),
      to: z.string(),
      deadline: z.string(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline } =
      req.body
    const tx = await exchangePool.populateTransaction.addLiquidity(
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline
    )

    res.send(data(convertBN(tx)))
  })

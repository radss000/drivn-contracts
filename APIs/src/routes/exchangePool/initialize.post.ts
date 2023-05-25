import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Initializes tokens addresses')
  .body(
    z.object({
      token0: z.string(),
      token1: z.string(),
    })
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const { token0, token1 } = req.body
    const tx = await exchangePool.populateTransaction.initialize(token0, token1)

    res.send(data(convertBN(tx)))
  })

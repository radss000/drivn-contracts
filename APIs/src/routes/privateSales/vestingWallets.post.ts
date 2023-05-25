import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns the vesting wallet, corresponding to a certain address, by it`s index'
  )
  .body(z.object({ account: z.string(), index: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { account, index } = req.body
    const wallet = await privateSales.vestingWallets(account, index)

    res.send(data(wallet.toString()))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns all vesting wallets corresponding to the current account')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { account } = req.body
    const wallets = await privateSales.getVestingWallets(account)
    res.send(data(wallets.toString()))
  })

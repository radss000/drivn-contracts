import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns a flag if an account is allowed to participate in a pre sale.')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { preSales } = useContracts()
    const { account } = req.body
    const flag = await preSales.isAllowed(account)

    res.send(data(flag.toString()))
  })

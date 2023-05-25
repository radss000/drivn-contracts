import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns all the time lock contracts, corresponding to the current account.'
  )
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { preSales } = useContracts()
    const { account } = req.body
    const contracts = await preSales.getAccountLockContracts(account)

    res.send(data(contracts.toString()))
  })

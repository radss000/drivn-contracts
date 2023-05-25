import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Retursn current receiving fees wallet')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const feeWallet = await exchangePool.feeWallet()
    res.send(data(feeWallet.toString()))
  })

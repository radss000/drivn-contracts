import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns contract ETH balance.')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { preSales } = useContracts()
    const balance = await preSales.getContractBalance()

    res.send(data(balance.toString()))
  })

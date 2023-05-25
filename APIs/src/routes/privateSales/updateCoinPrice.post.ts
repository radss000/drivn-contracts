import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Updates the current token price in the contract.')
  .body(z.object({ price: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { price } = req.body
    const tx = await privateSales.populateTransaction.updateCoinPrice(price)

    res.send(data(convertBN(tx)))
  })

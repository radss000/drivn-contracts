import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Performs a purchase during private sales. Let`s a verified user buy a certain amount of tokens.'
  )
  .body(z.object({ amount: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { amount } = req.body
    const tx = await privateSales.populateTransaction.buy(amount)

    res.send(data(convertBN(tx)))
  })

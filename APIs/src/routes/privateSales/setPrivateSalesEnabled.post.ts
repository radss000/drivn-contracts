import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Sets private sales flag. (Enabled => True, Disabled => False).')
  .body(z.object({ flag: z.boolean() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { flag } = req.body
    const tx = await privateSales.populateTransaction.setPrivateSalesEnabled(flag)

    res.send(data(convertBN(tx)))
  })

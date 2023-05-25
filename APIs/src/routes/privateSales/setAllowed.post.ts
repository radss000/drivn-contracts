import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Sets allowance for an array of accounts with a specified flag (True or False).'
  )
  .body(z.object({ flag: z.boolean(), accounts: z.string().array() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { privateSales } = useContracts()
    const { flag, accounts } = req.body
    const tx = await privateSales.populateTransaction.setAllowed(accounts, flag)

    res.send(data(convertBN(tx)))
  })

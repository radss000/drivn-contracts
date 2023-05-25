import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Sets access level to contract for a certain account')
  .body(z.object({ account: z.string(), flag: z.boolean() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const { account, flag } = req.body
    const tx = await earnNFTManagement.populateTransaction.setAllowed(account, flag)

    res.send(data(convertBN(tx)))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Sets the new message signer account.')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFTManagement } = useContracts()
    const { account } = req.body
    const tx = await burnNFTManagement.populateTransaction.setMessageSigner(account)

    res.send(data(convertBN(tx)))
  })

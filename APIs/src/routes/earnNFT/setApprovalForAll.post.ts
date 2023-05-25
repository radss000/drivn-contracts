import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Sets permission for the `operator` to be allowed to manage all of the assets of `owner`.'
  )
  .body(z.object({ operator: z.string(), approved: z.boolean() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { operator, approved } = req.body
    const tx = await earnNFT.populateTransaction.setApprovalForAll(operator, approved)

    res.send(data(convertBN(tx)))
  })

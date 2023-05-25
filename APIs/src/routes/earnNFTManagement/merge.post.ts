import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Merges up to 4 NFTs.')
  .body(z.object({ nfts: z.number().array() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const { nfts } = req.body
    const tx = await earnNFTManagement.populateTransaction.merge(nfts)

    res.send(data(convertBN(tx)))
  })

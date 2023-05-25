import { z } from 'zod'
import { defineHandler } from 'vort'
import { Signer, ethers } from 'ethers'

import { PopulatedTransactionSchema, convertBN } from '@/utils'
import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Performs a safe NFT transfer from a owner to spender')
  .body(z.object({ from: z.string(), to: z.string(), tokenId: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()
    const { from, to, tokenId } = req.body
    const tx = await burnNFT.populateTransaction[
      'safeTransferFrom(address,address,uint256)'
    ](from, to, tokenId)

    res.send(data(convertBN(tx)))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'
import { PopulatedTransaction, Signer, Wallet, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Burn an NFT with a certain id')
  .body(z.object({ tokenId: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()

    const { tokenId } = req.body
    const tx = await earnNFT.populateTransaction.burn(tokenId)

    res.send(data(convertBN(tx)))
  })

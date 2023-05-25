import { z } from 'zod'
import { defineHandler } from 'vort'
import { PopulatedTransaction, Signer, Wallet, ethers } from 'ethers'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description('Approve an NFT to be claimed by `spender` from `owner`')
  .body(z.object({ spender: z.string(), tokenId: z.number() }))
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()

    const { spender, tokenId } = req.body
    const tx = await earnNFT.populateTransaction.approve(spender, tokenId)

    res.send(data(convertBN(tx)))
  })

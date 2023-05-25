import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Get an account that can claim an NFT by NFT`s id')
  .body(z.object({ tokenId: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { tokenId } = req.body
    const account = await earnNFT.getApproved(tokenId)
    res.send(data(account.toString()))
  })

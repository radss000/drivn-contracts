import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('NFT`s owner')
  .body(z.object({ tokenId: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { tokenId } = req.body
    const owner = await earnNFT.ownerOf(tokenId)
    res.send(data(owner.toString()))
  })
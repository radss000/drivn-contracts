import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns NFT token id by it`s index')
  .body(z.object({ index: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()
    const { index } = req.body
    const tokenId = await burnNFT.tokenByIndex(index)
    res.send(data(tokenId.toString()))
  })

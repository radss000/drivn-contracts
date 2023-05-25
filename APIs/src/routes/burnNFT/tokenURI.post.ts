import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns token URI by tokenId')
  .body(z.object({ tokenId: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()
    const { tokenId } = req.body
    const uri = await burnNFT.tokenURI(tokenId)
    res.send(data(uri.toString()))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns if an account is the owner of an NFT by NFT`s index')
  .body(z.object({ index: z.number(), owner: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { index, owner } = req.body
    const flag = await earnNFT.tokenOfOwnerByIndex(owner, index)
    res.send(data(flag.toString()))
  })

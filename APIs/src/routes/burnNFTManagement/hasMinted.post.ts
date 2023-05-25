import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns if a user has already minted an NFT')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFTManagement } = useContracts()
    const { account } = req.body
    const flag = await burnNFTManagement.hasMinted(account)
    res.send(data(flag.toString()))
  })

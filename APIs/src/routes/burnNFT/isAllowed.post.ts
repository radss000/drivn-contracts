import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns a flag if a user is allowed to operate with NFT or not')
  .body(z.object({ account: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()
    const { account } = req.body
    const flag = await burnNFT.isAllowed(account)
    res.send(data(flag.toString()))
  })

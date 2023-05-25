import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns the fee for merging several NFT`s of certain access level')
  .body(z.object({ level: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const { level } = req.body
    const fee = await earnNFTManagement.calculateMergeFee(level)
    res.send(data(fee.toString()))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Get NFT`s current power')
  .body(z.object({ tokenId: z.number() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFTManagement } = useContracts()
    const { tokenId } = req.body
    const power = await earnNFTManagement.getCurrentPower(tokenId)
    res.send(data(power.toString()))
  })

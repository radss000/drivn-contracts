import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns the NFT total supply (Minted - Burned)')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()
    const supply = await burnNFT.totalSupply()
    res.send(data(supply.toString()))
  })

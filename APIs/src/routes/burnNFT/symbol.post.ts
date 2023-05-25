import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('NFT`s symbol')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { burnNFT } = useContracts()
    const symbol = await burnNFT.symbol()
    res.send(data(symbol.toString()))
  })

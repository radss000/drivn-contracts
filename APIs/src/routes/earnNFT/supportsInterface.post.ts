import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns true if the contract supprots an interface with a specified interface id'
  )
  .body(z.object({ interfaceId: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { interfaceId } = req.body
    const flag = await earnNFT.ownerOf(interfaceId)
    res.send(data(flag.toString()))
  })

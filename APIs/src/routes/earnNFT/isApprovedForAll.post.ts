import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description(
    'Returns if the `operator` is allowed to manage all of the assets of `owner`.'
  )
  .body(z.object({ operator: z.string(), owner: z.string() }))
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { earnNFT } = useContracts()
    const { operator, owner } = req.body
    const flag = await earnNFT.isApprovedForAll(owner, operator)
    res.send(data(flag.toString()))
  })

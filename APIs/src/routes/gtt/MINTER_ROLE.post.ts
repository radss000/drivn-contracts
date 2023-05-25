import { defineHandler } from 'vort'
import { z } from 'zod'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('MINTER_ROLE()')
  .output(WithErrorSchema(z.string()))
  .handler(async (_, res) => {
    const { gtt } = useContracts()
    res.send(data(await gtt.MINTER_ROLE()))
  })

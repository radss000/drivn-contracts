import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('DOMAIN_SEPARATOR()')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { exchangePool } = useContracts()
    const DOMAIN_SEPARATOR = await exchangePool.DOMAIN_SEPARATOR()
    res.send(data(DOMAIN_SEPARATOR.toString()))
  })

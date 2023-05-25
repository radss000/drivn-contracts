import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns the symbol of the token, usually a shorter version of the name.')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { drivn } = useContracts()
    const symbol = await drivn.symbol()
    res.send(data(symbol.toString()))
  })

import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'

export default defineHandler()
  .description('Returns total amount tokens exists')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { drivn } = useContracts()
    const totalSupply = await drivn.totalSupply()
    res.send(data(totalSupply.toString()))
  })

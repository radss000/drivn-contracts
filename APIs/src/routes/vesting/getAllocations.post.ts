import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { BigNumber } from 'ethers'

export default defineHandler()
  .description('function to get allocations link')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const allocations = await vesting.getAllocations()
    res.send(data(allocations.toString()))
  })

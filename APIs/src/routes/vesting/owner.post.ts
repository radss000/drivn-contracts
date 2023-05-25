import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { BigNumber } from 'ethers'

export default defineHandler()
  .description('Returns vesting contract owner')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const owner = await vesting.owner()
    res.send(data(owner.toString()))
  })

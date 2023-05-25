import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { BigNumber } from 'ethers'

export default defineHandler()
  .description('Returns amount of rounds')
  .output(WithErrorSchema(z.string()))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const roundLength = await vesting.roundLength()
    res.send(data(roundLength.toString()))
  })

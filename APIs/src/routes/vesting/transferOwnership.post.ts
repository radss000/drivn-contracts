import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description(
    'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.'
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ newOwner: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { vesting } = useContracts()
    const { newOwner } = req.body

    const tx = await vesting.populateTransaction.transferOwnership(newOwner)

    res.send(data(convertBN(tx)))
  })

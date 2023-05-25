import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description(
    'Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``s admin role. May emit a {RoleGranted} event.'
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ role: z.string(), account: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { role, account } = req.body

    const tx = await gtt.populateTransaction.grantRole(role, account)

    res.send(data(convertBN(tx)))
  })

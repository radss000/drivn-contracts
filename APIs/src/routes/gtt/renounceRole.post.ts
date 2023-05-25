import { z } from 'zod'
import { defineHandler } from 'vort'

import { useContracts } from '@/contracts'
import { WithErrorSchema, data, errorHandler } from '@/utils'
import { PopulatedTransactionSchema, convertBN } from '@/utils'

export default defineHandler()
  .description(
    'Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this functions purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.'
  )
  .output(WithErrorSchema(PopulatedTransactionSchema))
  .body(z.object({ role: z.string(), account: z.string() }))
  .modifier(errorHandler)
  .handler(async (req, res) => {
    const { gtt } = useContracts()
    const { role, account } = req.body

    const tx = await gtt.populateTransaction.renounceRole(role, account)

    res.send(data(convertBN(tx)))
  })

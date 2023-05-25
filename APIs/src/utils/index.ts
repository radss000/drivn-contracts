import { PopulatedTransaction } from 'ethers'
import { Response } from 'express'
import { z, Schema } from 'zod'

export const PopulatedTransactionSchema = z
  .object({
    to: z.string(),
    data: z.string(),
  })
  .partial()

export function convertBN(tx: PopulatedTransaction) {
  return {
    data: tx.data,
    to: tx.to,
  }
}

export const WithErrorSchema = <T>(data: Schema<T>) => {
  return z.object({
    data: data.nullish(),
    error: z.string().nullish(),
  })
}
export const data = <T>(data: T) => {
  return {
    data,
    error: null,
  }
}

export const error = (msg: string) => {
  return {
    data: null,
    error: msg,
  }
}
export const errorHandler = async (
  _: any,
  res: Response,
  handler: () => Promise<any>
) => {
  try {
    await handler()
  } catch (e: any) {
    res.send(error(e.reason))
  }
}

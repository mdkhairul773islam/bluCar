import { z } from 'zod'

const transactionSchema = z.object({
  transaction_at: z.date({ required_error: 'Date is required' }),
  party_code: z.string(),
  showroom_id: z.coerce.number(),
  supplier_id: z.coerce.number(),
  transaction_type: z.enum(['receive', 'paid']),
  transaction_method: z.enum(['Cash', 'Cheque', 'Bkash', 'T.T', 'Cash to T.T']),
  payment: z.coerce.number(),
  commission: z.coerce.number(),
  balance_status: z.enum(['Receivable', 'Payable']),
  remark: z.string().optional()
})

export default transactionSchema

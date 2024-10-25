import { z } from 'zod'

const supplierSchema = z.object({
  showroom_id: z.coerce.number({ required_error: 'Please select a showroom' }),
  date: z
    .string({ required_error: 'Date is required' })
    .refine(val => !isNaN(Date.parse(val)), {
      message: 'Invalid date format'
    })
    .transform(val => {
      const date = new Date(val)
      return date.toISOString().split('T')[0]
    }),
  name: z.string().min(1, { message: 'Name min 1 or more characters long' }),
  contact_person: z
    .string()
    .min(1, { message: 'Contact person min 1 or more characters long' }),
  mobile: z
    .string()
    .min(1, { message: 'Mobile min 1 or more characters long' })
    .max(20, { message: 'Mobile max 20  characters long' }),
  address: z
    .string()
    .min(1, { message: 'Address min 1 or more characters long' }),
  initial_balance: z.coerce.number({
    required_error: 'Initial balance is required'
  }),
  status: z.enum(['Receivable', 'Payable'], {
    required_error: 'You need to select type.'
  })
})

export default supplierSchema

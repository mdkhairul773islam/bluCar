import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(1, { message: 'Min 1 or more characters long' }),
  model: z.string().optional(),
  category_id: z.coerce.number({
    required_error: 'Category must be provide'
  }),
  brand_id: z.coerce.number({
    required_error: 'Brand must be provide'
  }),
  purchase_price: z.coerce.number({
    required_error: 'Purchase price must be provide'
  }),
  sale_price: z.coerce.number({
    required_error: 'Sale price must be provide'
  }),
  low_level: z.coerce.number().optional()
  //   status: z.enum(['available', 'notavailable'], {
  //     required_error: 'You need to select Status'
  //   })
})

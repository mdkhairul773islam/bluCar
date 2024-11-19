import { z } from 'zod'

const BrandSchema = z.object({
  name: z
    .string({ required_error: 'Brand name is required' })
    .min(1, { message: 'Min 1 or more characters long' }),
  description: z.string().optional()
})

export default BrandSchema

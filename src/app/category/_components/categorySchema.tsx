import { z } from 'zod'

const categorySchema = z.object({
  name: z
    .string({ required_error: 'Category name is required' })
    .min(1, { message: 'Min 1 or more characters long' }),
  description: z.string().optional()
})

export default categorySchema

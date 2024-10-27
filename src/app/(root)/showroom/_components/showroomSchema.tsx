import { z } from 'zod'

const showroomSchema = z.object({
  name: z.string().min(1, { message: 'Min 1 or more characters long' }),
  location: z.string().min(1, { message: 'Min 1 or more characters long' }),
  manager: z.string().optional(),
  mobile: z.string().optional(),
  mobile_two: z.string().optional(),
  address: z.string().optional()
})

export default showroomSchema

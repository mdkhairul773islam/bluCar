'use client'

import { Root } from '@radix-ui/react-label'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

const Label = ({ className, ...props }: React.ComponentProps<typeof Root>) => (
  <Root
    className={cn(labelVariants(), className)}
    data-slot='label'
    {...props}
  />
)

export { Label }

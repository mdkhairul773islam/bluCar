import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const Alert = ({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) => (
  <div
    role='alert'
    className={cn(alertVariants({ variant }), className)}
    data-slot='alert'
    {...props}
  />
)

const AlertTitle = ({ className, ...props }: React.ComponentProps<'h5'>) => (
  <h5
    className={cn('mb-1 leading-none font-medium tracking-tight', className)}
    data-slot='alert-title'
    {...props}
  />
)

const AlertDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => (
  <p
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    data-slot='alert-description'
    {...props}
  />
)

export { Alert, AlertDescription, AlertTitle }

import { cn } from '@/lib/utils'

const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'bg-card text-card-foreground rounded-xl border shadow-sm',
      className
    )}
    data-state='card'
    {...props}
  />
)

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    data-slot='card-header'
    {...props}
  />
)

const CardTitle = ({ className, ...props }: React.ComponentProps<'h3'>) => (
  <h3
    className={cn('leading-none font-semibold tracking-tight', className)}
    data-slot='card-title'
    {...props}
  />
)

const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<'p'>) => (
  <p
    className={cn('text-muted-foreground text-sm', className)}
    data-slot='card-description'
    {...props}
  />
)

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('p-6 pt-0', className)}
    data-slot='card-content'
    {...props}
  />
)

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('flex items-center p-6 pt-0', className)}
    data-slot='card-footer'
    {...props}
  />
)

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

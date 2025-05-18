import { cn } from '@/lib/utils'

export type TInputProps = React.ComponentProps<'input'>

const Input = ({ className, type, ...props }: TInputProps) => {
  return (
    <input
      type={type}
      className={cn(
        'border-input placeholder:text-muted-foreground focus:border-brand-400 focus-visible:ring-ring dark:[&[readonly]]:bg-muted flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-0 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&[readonly]]:bg-gray-100',
        className
      )}
      data-slot='input'
      {...props}
    />
  )
}

export { Input }

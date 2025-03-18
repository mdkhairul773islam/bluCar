import type { InputHTMLAttributes, RefObject } from 'react';

import { cn } from '@/lib/utils'

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (
  {
    ref,
    className,
    type,
    ...props
  }: InputProps & {
    ref: RefObject<HTMLInputElement>;
  }
) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-brand-400 focus-visible:outline-hidden focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&[readonly]]:bg-gray-100 dark:[&[readonly]]:bg-muted',
        className
      )}
      ref={ref}
      {...props}
    />
  )
}
Input.displayName = 'Input'

export { Input }

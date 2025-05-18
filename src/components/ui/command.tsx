import { type DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const Command = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive
    className={cn(
      'bg-popover text-popover-foreground flex size-full flex-col overflow-hidden rounded-md',
      className
    )}
    data-slot='command'
    {...props}
  />
)

type TCommandDialogProps = DialogProps & {}

const CommandDialog = ({ children, ...props }: TCommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-lg'>
        <Command className='[&_[cmdk-item]_svg]:size-5[&_[cmdk-item]_svg]:w-5 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) => (
  <div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
    <Search className='mr-2 size-4 shrink-0 opacity-50' />
    <CommandPrimitive.Input
      className={cn(
        'placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      data-slot='command-input'
      {...props}
    />
  </div>
)

const CommandList = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List
    className={cn('max-h-[300px] overflow-x-hidden overflow-y-auto', className)}
    data-slot='command-list'
    {...props}
  />
)

const CommandEmpty = ({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty
    className='py-6 text-center text-sm'
    data-slot='command-empty'
    {...props}
  />
)

const CommandGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group
    className={cn(
      'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
      className
    )}
    data-slot='command-group'
    {...props}
  />
)

const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    className={cn('bg-border -mx-1 h-px', className)}
    data-slot='command-separator'
    {...props}
  />
)

const CommandItem = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    className={cn(
      'aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
      className
    )}
    data-slot='command-item'
    {...props}
  />
)

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className
      )}
      data-slot='command-shortcut'
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
}

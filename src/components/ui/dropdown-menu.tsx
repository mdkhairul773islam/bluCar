'use client'

import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger
} from '@radix-ui/react-dropdown-menu'
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const DropdownMenu = Root

const DropdownMenuTrigger = Trigger

const DropdownMenuGroup = Group

const DropdownMenuPortal = Portal

const DropdownMenuSub = Sub

const DropdownMenuRadioGroup = RadioGroup

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof SubTrigger> & {
  inset?: boolean
}) => (
  <SubTrigger
    className={cn(
      'focus:bg-accent data-[state=open]:bg-accent flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
      inset && 'pl-8',
      className
    )}
    data-slot='dropdown-menu-sub-trigger'
    {...props}
  >
    {children}
    <ChevronRightIcon className='ml-auto h-4 w-4' />
  </SubTrigger>
)

const DropdownMenuSubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof SubContent>) => (
  <SubContent
    className={cn(
      'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg',
      className
    )}
    data-slot='dropdown-menu-sub-content'
    {...props}
  />
)

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof Content>) => (
  <Portal>
    <Content
      sideOffset={sideOffset}
      className={cn(
        'bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      data-slot='dropdown-menu-content'
      {...props}
    />
  </Portal>
)

const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof Item> & {
  inset?: boolean
}) => (
  <Item
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
      inset && 'pl-8',
      className
    )}
    data-slot='dropdown-menu-item'
    {...props}
  />
)

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof CheckboxItem>) => (
  <CheckboxItem
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
      className
    )}
    data-slot='dropdown-menu-checkbox-item'
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <CheckIcon className='h-4 w-4' />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
)

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioItem>) => (
  <RadioItem
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
      className
    )}
    data-slot='dropdown-menu-radio-item'
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <DotFilledIcon className='h-4 w-4 fill-current' />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
)

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof Label> & {
  inset?: boolean
}) => (
  <Label
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    data-slot='dropdown-menu-label'
    {...props}
  />
)

const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) => (
  <Separator
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    data-slot='dropdown-menu-separator'
    {...props}
  />
)

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      data-slot='dropdown-menu-shortcut'
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
}

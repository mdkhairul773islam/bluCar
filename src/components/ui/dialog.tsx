'use client'

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const Dialog = Root

const DialogTrigger = Trigger

const DialogPortal = Portal

const DialogClose = Close

const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof Overlay>) => (
  <Overlay
    className={cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
      className
    )}
    data-slot='dialog-overlay'
    {...props}
  />
)

const DialogContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Content>) => (
  <DialogPortal>
    <DialogOverlay />

    <Content
      className={cn(
        'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
        className
      )}
      data-slot='dialog-content'
      {...props}
    >
      {children}
      <Close className='ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none'>
        <Cross2Icon className='h-4 w-4' />
        <span className='sr-only'>Close</span>
      </Close>
    </Content>
  </DialogPortal>
)

const DialogHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    data-slot='dialog-header'
    {...props}
  />
)

const DialogFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    data-slot='dialog-footer'
    {...props}
  />
)

const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>) => (
  <Title
    className={cn(
      'text-lg leading-none font-semibold tracking-tight',
      className
    )}
    data-slot='dialog-title'
    {...props}
  />
)

const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>) => (
  <Description
    className={cn('text-muted-foreground text-sm', className)}
    data-slot='dialog-description'
    {...props}
  />
)

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
}

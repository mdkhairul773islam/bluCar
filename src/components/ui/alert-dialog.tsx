'use client'

import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger
} from '@radix-ui/react-alert-dialog'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const AlertDialog = Root

const AlertDialogTrigger = Trigger

const AlertDialogPortal = Portal

const AlertDialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof Overlay>) => (
  <Overlay
    className={cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
      className
    )}
    data-slot='alert-dialog-overlay'
    {...props}
  />
)

const AlertDialogContent = ({
  className,
  ...props
}: React.ComponentProps<typeof Content>) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <Content
      className={cn(
        'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
        className
      )}
      data-slot='alert-dialog-content'
      {...props}
    />
  </AlertDialogPortal>
)

const AlertDialogHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    data-slot='alert-dialog-header'
    {...props}
  />
)

const AlertDialogFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    data-slot='alert-dialog-footer'
    {...props}
  />
)

const AlertDialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>) => (
  <Title
    className={cn('text-lg font-semibold', className)}
    data-slot='alert-dialog-title'
    {...props}
  />
)

const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>) => (
  <Description
    className={cn('text-muted-foreground text-sm', className)}
    data-slot='alert-dialog-description'
    {...props}
  />
)

const AlertDialogAction = ({
  className,
  ...props
}: React.ComponentProps<typeof Action>) => (
  <Action
    className={cn(buttonVariants({ variant: 'destructive' }), className)}
    data-slot='alert-dialog-action'
    {...props}
  />
)

const AlertDialogCancel = ({
  className,
  ...props
}: React.ComponentProps<typeof Cancel>) => (
  <Cancel
    className={cn(
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
      className
    )}
    data-slot='alert-dialog-cancel'
    {...props}
  />
)

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger
}

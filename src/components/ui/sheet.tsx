'use client'

import {
  Content,
  Description,
  Overlay,
  Root as Sheet,
  Close as SheetClose,
  Portal as SheetPortal,
  Trigger as SheetTrigger,
  Title
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const SheetOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof Overlay>) => (
  <Overlay
    className={cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
      className
    )}
    {...props}
  />
)

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b  data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0  border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0  left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0  right-0 h-full overflow-y-auto w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
      }
    },
    defaultVariants: {
      side: 'right'
    }
  }
)

type TSheetContentProps = React.ComponentProps<typeof Content> &
  VariantProps<typeof sheetVariants> & {}

const SheetContent = ({
  side = 'right',
  className,
  children,
  ...props
}: TSheetContentProps) => (
  <SheetPortal>
    <SheetOverlay />
    <Content className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetClose className='ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none'>
        <Cross2Icon className='h-4 w-4' />
        <span className='sr-only'>Close</span>
      </SheetClose>
    </Content>
  </SheetPortal>
)

const SheetHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
)

const SheetFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
)

const SheetTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>) => (
  <Title
    className={cn('text-foreground text-lg font-semibold', className)}
    {...props}
  />
)

const SheetDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>) => (
  <Description
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
)

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger
}

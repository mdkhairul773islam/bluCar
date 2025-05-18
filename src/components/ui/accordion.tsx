'use client'

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const Accordion = Root

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof Item>) => (
  <Item ref={ref} className={cn('border-b', className)} {...props} />
)

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Trigger>) => (
  <Header className='flex'>
    <Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className='text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200' />
    </Trigger>
  </Header>
)

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Content>) => (
  <Content
    ref={ref}
    className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </Content>
)

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

'use client'

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

const Accordion = Root

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof Item>) => (
  <Item className={cn('border-b', className)} {...props} />
)

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Trigger>) => (
  <Header className='flex'>
    <Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      data-slot="accordion-item"
      {...props}
    >
      {children}
      <ChevronDownIcon className='text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200' />
    </Trigger>
  </Header>
)

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Content>) => (
  <Content
    className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
    data-slot="accordion-content"
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </Content>
)

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

'use client'

import { Root as Tabs, Content, List, Trigger } from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const TabsList = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof List>) => (
  <List
    ref={ref}
    className={cn(
      'bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1',
      className
    )}
    {...props}
  />
)

const TabsTrigger = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof Trigger>) => (
  <Trigger
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
)

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof Content>) => (
  <Content
    className={cn(
      'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
      className
    )}
    {...props}
  />
)

export { Tabs, TabsContent, TabsList, TabsTrigger }

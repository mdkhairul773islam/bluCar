'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavigationTabs = ({
  links
}: {
  links: {
    label: string
    labelBadge?: string
    href: string
    icon?: React.ReactNode
  }[]
}) => {
  const pathname = usePathname()

  return (
    <ScrollArea>
      <div className='rounded bg-brand-50 py-4'>
        <div className='relative z-[1] flex flex-wrap items-center gap-1 px-3'>
          {links?.map((link, index) => (
            <Link
              key={index.toString()}
              href={link.href}
              className={`whitespace-nowrap border bg-background px-2 py-1 text-xs font-medium  ${
                link.href == pathname &&
                '!bg-brand text-white hover:!bg-brand hover:!text-white'
              }  hover:border-brand hover:text-brand`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}

export default NavigationTabs

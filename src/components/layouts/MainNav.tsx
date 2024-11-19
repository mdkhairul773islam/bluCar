'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NavItems } from '@/constants/side-nav'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/sidebar-menu'

const MainNav = () => {
  const isOpen = true
  const [openItem, setOpenItem] = useState('')
  const [lastOpenItem, setLastOpenItem] = useState('')

  const { activeMenu } = useSidebarStore()

  useEffect(() => {
    if (isOpen) {
      setOpenItem(lastOpenItem)
    } else {
      setLastOpenItem(openItem)
      setOpenItem('')
    }
  }, [isOpen])

  return (
    <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
      {NavItems.map(item =>
        item.isChildren ? (
          <Accordion
            key={item.title}
            type='single'
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
          >
            <AccordionItem value={item.title} className='border-b-0'>
              <AccordionTrigger
                className={`rounded-lg ${
                  item.activeMenu === activeMenu &&
                  'bg-slate-800 text-white hover:text-white'
                } px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:no-underline`}
              >
                <div
                  className={`flex items-center gap-3 font-medium ${
                    item.activeMenu === activeMenu && 'text-white'
                  }`}
                >
                  <item.icon className={cn('size-4')} />
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className='relative ml-4 pb-0 after:absolute after:left-0 after:top-0 after:h-[calc(100%_-_13px)] after:w-0.5 after:bg-border'>
                {item.children?.map(child => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className='relative flex items-center gap-3 rounded-lg px-3 py-1 pl-6 text-muted-foreground transition-all after:absolute after:left-0 after:top-1/2 after:h-0.5 after:w-[14px] after:-translate-y-1/2 after:bg-border hover:text-primary'
                  >
                    {child.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            className={`flex font-medium ${
              item.activeMenu === activeMenu &&
              'bg-slate-800 text-white hover:text-white'
            } items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
          >
            <item.icon className={cn('size-4')} />
            {item.title}
          </Link>
        )
      )}
    </nav>
  )
}

export default MainNav

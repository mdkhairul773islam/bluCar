import React from 'react'
import Link from 'next/link'
import MainNav from './MainNav'
import { Car } from 'lucide-react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

const Sidebar = () => {
  return (
    <div className='fixed hidden h-screen w-[280px] flex-col gap-2 border-r bg-muted/40 lg:flex'>
      <ScrollArea>
        <div className='flex h-14 shrink-0 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link
            href='/'
            className='flex items-center gap-2 font-semibold text-primary'
          >
            <Car className='h-6 w-6' />
            <span>Blue Motors</span>
          </Link>
        </div>
        <div className='flex-1 py-2'>
          {/* Main Nav */}
          <MainNav />
        </div>
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    </div>
  )
}

export default Sidebar

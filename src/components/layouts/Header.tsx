import React from 'react'
import MainNav from './MainNav'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import HeaderSearch from './HeaderSearch'
import HeaderProfile from './HeaderProfile'
import { ThemeToggle } from './ThemeToggle'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

const Header = () => {
  return (
    <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 lg:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col p-4 pt-8'>
          <ScrollArea>
            <MainNav />
            <ScrollBar orientation='vertical' />
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Header Search */}
      <div className='w-full flex-1'>
        <HeaderSearch />
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Header Profile */}
      <HeaderProfile />
    </header>
  )
}

export default Header

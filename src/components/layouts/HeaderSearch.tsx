'use client'

import React from 'react'

import { useRouter } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Circle, Minus, Search } from 'lucide-react'
import { NavItems } from '@/constants/side-nav'

const HeaderSearch = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='relative flex h-9 w-full  items-center gap-2 rounded-lg border border-input bg-background p-[10px] text-left text-sm text-[#5A6272] sm:h-auto lg:max-w-[420px]'
      >
        <Search className='size-4 text-[#5A6272] sm:size-5' />
        <span className='block'>Type to search...</span>
        <kbd className='pointer-events-none absolute right-1.5 top-1/2 hidden h-5   -translate-y-1/2 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {NavItems.map((item, index) =>
            item.isChildren ? (
              <CommandGroup key={index} className='p-0' heading={item.title}>
                {item.children?.map(child => (
                  <React.Fragment key={child.href}>
                    <CommandItem
                      value={`${child.title} ${child.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(child.href as string))
                      }}
                      className='flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-muted-foreground'
                    >
                      <Circle className='size-4' />
                      {child.title}
                    </CommandItem>
                  </React.Fragment>
                ))}
              </CommandGroup>
            ) : (
              <CommandItem
                key={index}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(item.href as string))
                }}
                className='flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-muted-foreground'
              >
                <item.icon className={'size-4'} />
                {item.title}
              </CommandItem>
            )
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default HeaderSearch

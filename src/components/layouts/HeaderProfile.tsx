import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { CircleUser, LogOut, User, UserPlus, Users } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeaderProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <CircleUser className='size-[1.2rem]' />
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-52'>
        <DropdownMenuLabel>
          <div className='flex flex-col'>
            <span>John Doe</span>
            <span className='text-primary/70'>example@gmail.com</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0'>
          <Link
            className='flex w-full items-center gap-2 p-2 font-medium text-primary/80'
            href='/profile'
          >
            <User className='size-4' />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='p-0'>
          <Link
            className='flex w-full items-center gap-2 p-2 font-medium text-primary/80'
            href='/profile/create'
          >
            <UserPlus className='size-4' />
            Create Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='p-0'>
          <Link
            className='flex w-full items-center gap-2 p-2 font-medium text-primary/80'
            href='/profile/all'
          >
            <Users className='size-4' />
            All Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0'>
          <div className='flex w-full items-center gap-2 p-2 font-medium text-primary/80'>
            <LogOut className='size-4' />
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderProfile

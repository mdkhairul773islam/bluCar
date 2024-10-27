'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Hash, Lightbulb, User, Trash, Store, Eye, Edit } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'
import Image from 'next/image'
import Link from 'next/link'

export type Profile = {
  id: string
  image: string
  name: string
  showroom: string
  username: string
  privilege: string
}

export const columns: ColumnDef<Profile>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Column
        icon={<Hash className='size-3' />}
        label='ID'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    )
  },
  {
    accessorKey: 'image',
    header: () => <Column icon={<User className='size-3' />} label='Image' />,
    cell: ({ row }) => {
      const { image }: { image: string } = row.original

      return (
        <Image
          height={60}
          width={60}
          className='rounded'
          src={`${image ? image : '/images/profile.png'}`}
          alt='Profile Image'
        />
      )
    }
  },
  {
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    )
  },
  {
    accessorKey: 'username',
    header: () => <Column icon={<User className='size-3' />} label='Username' />
  },

  {
    id: 'actions',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Actions' />
    ),
    cell: ({ row }) => {
      const { id }: { id: string } = row.original

      return (
        <>
          <div className='flex items-center justify-end gap-2'>
            <Link href={`/profile/show/${id}`}>
              <Button size='icon' className='show-button'>
                <Eye className='size-4' />
              </Button>
            </Link>

            <Link href={`/profile/edit/${id}`}>
              <Button size='icon' className='edit-button'>
                <Edit className=' size-4' />
              </Button>
            </Link>

            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

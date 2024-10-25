'use client'

import {
  Hash,
  Lightbulb,
  LocateFixed,
  PhoneCall,
  User,
  MapPinned,
  MapPin
} from 'lucide-react'
import EditShowroom from './EditShowroom'
import Column from '@/components/shared/Column'
import { ColumnDef } from '@tanstack/react-table'
import DeleteShowroom from './DeleteShowroom'

export type Showroom = {
  id: number
  name: string
  location: string
  manager: string | null
  mobile: string | null
  mobile_two: string | null
  address: string | null
  name_code: string
}

export const columns: ColumnDef<Showroom>[] = [
  {
    accessorKey: 'serial',
    header: ({ column }) => (
      <Column
        icon={<Hash className='size-3' />}
        label='SL'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: ({ row }) => <>{row.index + 1}</>
  },
  {
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'location',
    header: () => (
      <Column icon={<MapPin className='size-3' />} label='Location' />
    )
  },
  {
    accessorKey: 'manager',
    header: () => <Column icon={<User className='size-3' />} label='Manager' />,
    cell: ({ row }) => {
      const { manager }: { manager: string | null } = row.original

      return <>{manager ? manager : '-'}</>
    }
  },
  {
    accessorKey: 'mobile',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Mobile' />
    ),
    cell: ({ row }) => {
      const { mobile }: { mobile: string | null } = row.original

      return <>{mobile ? mobile : '-'}</>
    }
  },
  {
    accessorKey: 'mobile_two',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Mobile Two' />
    ),
    cell: ({ row }) => {
      const { mobile_two }: { mobile_two: string | null } = row.original

      return <>{mobile_two ? mobile_two : '-'}</>
    }
  },

  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
    ),
    cell: ({ row }) => {
      const { address }: { address: string | null } = row.original

      return <>{address ? address : '-'}</>
    }
  },
  {
    accessorKey: 'name_code',
    header: () => (
      <Column icon={<LocateFixed className='size-3' />} label='Prefix' />
    )
  },

  {
    id: 'actions',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Actions' />
    ),
    cell: ({ row }) => {
      const { id }: { id: number } = row.original

      return (
        <>
          <div className='flex items-center justify-end gap-2'>
            <EditShowroom showroom={row.original} />

            <DeleteShowroom id={id} />
          </div>
        </>
      )
    }
  }
]

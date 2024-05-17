'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Hash,
  Lightbulb,
  LocateFixed,
  PhoneCall,
  User,
  MapPinned
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import EditShowroom from './EditShowroom'
import Column from '@/components/shared/Column'

export type Showroom = {
  id: string
  name: string
  manager: string
  mobile: string
  mobile_two: string
  mobile_three: string
  address: string
  prefix: string
}

export const columns: ColumnDef<Showroom>[] = [
  {
    id: 'Select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
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
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'manager',
    header: () => <Column icon={<User className='size-3' />} label='Manager' />
  },
  {
    accessorKey: 'mobile',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Mobile' />
    ),
    cell: ({ row }) => {
      const { mobile }: { mobile: string } = row.original

      return <>{mobile ? mobile : '-'}</>
    }
  },
  {
    accessorKey: 'mobile_two',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Mobile Two' />
    ),
    cell: ({ row }) => {
      const { mobile_two }: { mobile_two: string } = row.original

      return <>{mobile_two ? mobile_two : '-'}</>
    }
  },
  {
    accessorKey: 'mobile_three',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Mobile Three' />
    ),
    cell: ({ row }) => {
      const { mobile_three }: { mobile_three: string } = row.original

      return <>{mobile_three ? mobile_three : '-'}</>
    }
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
    ),
    cell: ({ row }) => {
      const { address }: { address: string } = row.original

      return <>{address ? address : '-'}</>
    }
  },
  {
    accessorKey: 'prefix',
    header: () => (
      <Column icon={<LocateFixed className='size-3' />} label='Area' />
    )
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
            <EditShowroom />
          </div>
        </>
      )
    }
  }
]

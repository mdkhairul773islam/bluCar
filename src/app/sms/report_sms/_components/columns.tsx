'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Hash, User, Phone, Calendar, MessageCircle, Store } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Column from '@/components/shared/Column'

export type SMS = {
  id: string
  date: string
  party_name: string
  mobile: string
  message: string
  showroom: string
  status: 'Send' | 'Pending'
}

export const columns: ColumnDef<SMS>[] = [
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
        label='SL'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    )
  },
  {
    accessorKey: 'date',
    header: () => <Column icon={<Calendar className='size-3' />} label='Date' />
  },
  {
    accessorKey: 'party_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Party Name' />
    )
  },
  {
    accessorKey: 'mobile',
    header: () => (
      <Column icon={<Phone className='size-3' />} label='Mobile Number' />
    )
  },
  {
    accessorKey: 'message',
    header: () => (
      <Column icon={<MessageCircle className='size-3' />} label='Message' />
    )
  },
  {
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    )
  },
  {
    accessorKey: 'Status',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    ),
    cell: ({ row }) => {
      const { status } = row.original

      return (
        <div className='flex justify-end'>
          <Badge
            className={`rounded-full ${status == 'Send' ? 'bg-green-600' : 'bg-red-600'}`}
          >
            {status}
          </Badge>
        </div>
      )
    }
  }
]

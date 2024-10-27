'use client'

import Column from '@/components/shared/Column'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Code,
  Code2,
  Coins,
  Hash,
  Lightbulb,
  MapPinned,
  Phone,
  User
} from 'lucide-react'

export type Due = {
  id: string
  name: string
  customer_id: string
  mobile: string
  address: string
  due: number
  type: 'Receivable' | 'Payable'
}

export const columns: ColumnDef<Due>[] = [
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
    header: () => <Column icon={<User className='size-3' />} label='Date' />
  },
  {
    accessorKey: 'customer_id',
    header: () => (
      <Column icon={<User className='size-3' />} label='Customer ID' />
    )
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
    )
  },

  {
    accessorKey: 'due',
    header: () => <Column icon={<Coins className='size-3' />} label='Due' />
  },
  {
    accessorKey: 'type',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Type' />
    ),
    cell: ({ row }) => {
      const { type } = row.original

      return (
        <div className='flex justify-end'>
          <Badge
            className={`rounded-full ${type === 'Receivable' ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {type}
          </Badge>
        </div>
      )
    }
  }
]

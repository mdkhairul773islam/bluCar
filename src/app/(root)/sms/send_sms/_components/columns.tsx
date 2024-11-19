'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Hash, User, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Column from '@/components/shared/Column'

export type SMS = {
  id: string
  name: string
  mobile: string
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
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  }
]



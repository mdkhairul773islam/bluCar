'use client'

import Column from '@/components/shared/Column'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Calendar, HandCoins, Hash, Store, User, User2 } from 'lucide-react'
import { TbDetails } from 'react-icons/tb'

export type Damage = {
  id: string
  date: string
  product_code: string
  product_name: string
  quantity: number
  remark: string
  username: string
}

export const columns: ColumnDef<Damage>[] = [
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
    accessorKey: 'date',
    header: () => <Column icon={<Calendar className='size-3' />} label='Date' />
  },
  {
    accessorKey: 'product_code',
    header: () => <Column icon={<Store className='size-3' />} label='Code' />
  },
  {
    accessorKey: 'product_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='product_name' />
    )
  },
  {
    accessorKey: 'quantity',
    header: () => (
      <Column icon={<HandCoins className='size-3' />} label='Quantity' />
    ),
    cell: ({ row }) => {
      const { quantity }: { quantity: number } = row.original

      return `${quantity} (Pcs)`
    }
  },
  {
    accessorKey: 'remark',
    header: () => (
      <Column icon={<TbDetails className='size-3' />} label='Remark' />
    )
  },
  {
    accessorKey: 'username',
    header: () => (
      <Column icon={<User2 className='size-3' />} label='Username' />
    )
  }
]

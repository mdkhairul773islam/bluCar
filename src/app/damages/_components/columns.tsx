'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  HandCoins,
  Hash,
  Lightbulb,
  Store,
  Trash,
  User,
  User2
} from 'lucide-react'
import { TbDetails } from 'react-icons/tb'

import { Button } from '@/components/ui/button'
import EditDamage from './EditDamage'
import Column from '@/components/shared/Column'

export type Damage = {
  id: string
  date: string
  product_code: string
  product_name: string
  quantity: number
  sale_price: number
  amount: number
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
    accessorKey: 'sale_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Sale Price' />
    )
  },
  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />
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
            <EditDamage />

            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

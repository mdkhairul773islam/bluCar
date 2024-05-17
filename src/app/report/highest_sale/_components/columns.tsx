'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  Hash,
  Phone,
  Scale,
  ShoppingBag,
  Store,
  TicketCheck
} from 'lucide-react'

import Column from '@/components/shared/Column'

export type HighestSale = {
  id: string
  product_name: string
  quantity: number
}

export const columns: ColumnDef<HighestSale>[] = [
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
    accessorKey: 'product_name',
    header: () => (
      <Column icon={<ShoppingBag className='size-3' />} label='Product Name' />
    )
  },
  {
    accessorKey: 'quantity',
    header: () => (
      <Column icon={<Calendar className='size-3' />} label='Quantity' />
    ),
    cell: ({ row }) => {
      const { quantity } = row.original

      return <div className='flex justify-end '>{quantity}</div>
    }
  }
]

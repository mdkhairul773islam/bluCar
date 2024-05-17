'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  Hash,
  Phone,
  Scale,
  ShoppingBag,
  TicketCheck
} from 'lucide-react'

import Column from '@/components/shared/Column'

export type Purchase = {
  id: string
  product_name: string
  unit: string
  voucher_no: string
  quantity: number
  purchase_price: number
  sale_price: number
  discount: number
  purchase_amount: number
  sale_amount: number
  profit: number
  loss: number
}

export const columns: ColumnDef<Purchase>[] = [
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
    accessorKey: 'unit',
    header: () => <Column icon={<Scale className='size-3' />} label='Unit' />
  },
  {
    accessorKey: 'voucher_no',
    header: () => (
      <Column icon={<TicketCheck className='size-3' />} label='Voucher No' />
    )
  },
  {
    accessorKey: 'quantity',
    header: () => (
      <Column icon={<Scale className='size-3' />} label='Quantity' />
    )
  },
  {
    accessorKey: 'purchase_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Purchase Price' />
    )
  },
  {
    accessorKey: 'sale_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Sale Price' />
    )
  },
  {
    accessorKey: 'discount',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Discount' />
    )
  },
  {
    accessorKey: 'purchase_amount',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Purchase Amount' />
    )
  },
  {
    accessorKey: 'sale_amount',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Sale Amount' />
    )
  },
  {
    accessorKey: 'profit',
    header: () => <Column icon={<Coins className='size-3' />} label='Profit' />
  },
  {
    accessorKey: 'loss',
    header: () => <Column icon={<Coins className='size-3' />} label='Loss' />,
    cell: ({ row }) => {
      const { loss } = row.original

      return <div className='flex justify-end '>{loss}</div>
    }
  }
]

'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Code2,
  Coins,
  Hash,
  Phone,
  Scale,
  ShoppingBag,
  TicketCheck
} from 'lucide-react'

import Column from '@/components/shared/Column'
import Link from 'next/link'

export type Sale = {
  id: string
  date: string
  voucher_no: string
  product_name: string
  unit: string
  quantity: number
  sale_price: number
  amount: number
}

export const columns: ColumnDef<Sale>[] = [
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
    accessorKey: 'voucher_no',
    header: () => (
      <Column icon={<TicketCheck className='size-3' />} label='Voucher No' />
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
    accessorKey: 'quantity',
    header: () => (
      <Column icon={<Code2 className='size-3' />} label='Quantity' />
    )
  },
  {
    accessorKey: 'sale_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Sale Price' />
    )
  },
  {
    accessorKey: 'amount',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Amount (TK)' />
    ),
    cell: ({ row }) => {
      const { amount } = row.original

      return <div className='flex justify-end '>{amount}</div>
    }
  }
]

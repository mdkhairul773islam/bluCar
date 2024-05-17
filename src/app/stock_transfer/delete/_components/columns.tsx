'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Boxes,
  Calendar,
  Code,
  Coins,
  Edit,
  Eye,
  Grid2X2,
  Hash,
  Lightbulb,
  Store,
  TicketCheck,
  Trash,
  User
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Column from '@/components/shared/Column'

export type StockTransfer = {
  id: string
  date: string
  voucher_no: string
  product_name: string
  category: string
  subcategory: string
  quantity: string
  purchase_price: number
  sell_price: number
  purchase_amount: number
  sell_amount: number
  showroom_from: string
  showroom_to: string
  username: string
}

export const columns: ColumnDef<StockTransfer>[] = [
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
    accessorKey: 'voucher_no',
    header: () => (
      <Column icon={<TicketCheck className='size-3' />} label='Voucher No' />
    )
  },
  {
    accessorKey: 'product_name',
    header: () => (
      <Column icon={<Boxes className='size-3' />} label='Product Name' />
    )
  },
  {
    accessorKey: 'category',
    header: () => (
      <Column icon={<Grid2X2 className='size-3' />} label='Category' />
    )
  },
  {
    accessorKey: 'subcategory',
    header: () => (
      <Column icon={<Grid2X2 className='size-3' />} label='Subcategory' />
    )
  },
  {
    accessorKey: 'quantity',
    header: () => <Column icon={<Code className='size-3' />} label='Quantity' />
  },
  {
    accessorKey: 'purchase_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Purchase Price' />
    )
  },
  {
    accessorKey: 'sell_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Sell Price' />
    )
  },
  {
    accessorKey: 'purchase_amount',
    header: () => (
      <Column icon={<Code className='size-3' />} label='Purchase Amount' />
    )
  },
  {
    accessorKey: 'sell_amount',
    header: () => (
      <Column icon={<Code className='size-3' />} label='Sell Amount' />
    )
  },

  {
    accessorKey: 'showroom_from',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom From' />
    )
  },
  {
    accessorKey: 'showroom_to',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom To' />
    )
  },
  {
    accessorKey: 'username',
    header: () => <Column icon={<User className='size-3' />} label='Username' />
  }
]

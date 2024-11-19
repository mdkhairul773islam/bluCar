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

export type ClosingBalance = {
  id: string
  showroom: string
  date: string
  closing_balance: number
}

export const columns: ColumnDef<ClosingBalance>[] = [
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
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    )
  },
  {
    accessorKey: 'date',
    header: () => <Column icon={<Calendar className='size-3' />} label='Date' />
  },

  {
    accessorKey: 'closing_balance',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />,
    cell: ({ row }) => {
      const { closing_balance } = row.original

      return <div className='flex justify-end '>{closing_balance}</div>
    }
  }
]

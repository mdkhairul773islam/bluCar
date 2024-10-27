'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Calendar, Hash, User } from 'lucide-react'

import Column from '@/components/shared/Column'

export type ClientHighestSale = {
  id: string
  client: string
  amount: number
}

export const columns: ColumnDef<ClientHighestSale>[] = [
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
    accessorKey: 'client',
    header: () => <Column icon={<User className='size-3' />} label='Client' />
  },
  {
    accessorKey: 'amount',
    header: () => (
      <Column icon={<Calendar className='size-3' />} label='Amount' />
    ),
    cell: ({ row }) => {
      const { amount } = row.original

      return <div className='flex justify-end '>{amount}</div>
    }
  }
]

'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Calendar, Code2, Coins, Hash, User } from 'lucide-react'
import Column from '@/components/shared/Column'

export type Expenditure = {
  id: string
  date: string
  order_no: string
  amount: number
}

export const expenditureColumns: ColumnDef<Expenditure>[] = [
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
    accessorKey: 'order_no',
    header: () => (
      <Column icon={<Code2 className='size-3' />} label='Order No' />
    )
  },
  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />,
    cell: ({ row }) => {
      const { amount } = row.original
      return <div className='flex justify-end'>{amount}</div>
    }
  }
]

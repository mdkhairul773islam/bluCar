'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Code2, Coins, Hash, User } from 'lucide-react'
import Column from '@/components/shared/Column'

export type Income = {
  id: string
  customer_name: string
  order_no: string
  amount: number
}

export const incomeColumns: ColumnDef<Income>[] = [
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
    accessorKey: 'customer_name',
    header: () => <Column icon={<User className='size-3' />} label='Customer' />
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

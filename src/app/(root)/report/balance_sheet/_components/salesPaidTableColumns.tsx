'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Code2, Coins, Hash, TicketCheck, User } from 'lucide-react'
import Column from '@/components/shared/Column'

export type SalesPaid = {
  id: string
  voucher: string
  client_name: string
  amount: number
}

export const salesPaidColumns: ColumnDef<SalesPaid>[] = [
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
    accessorKey: 'client_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Client Name' />
    )
  },
  {
    accessorKey: 'voucher',
    header: () => (
      <Column icon={<TicketCheck className='size-3' />} label='Voucher' />
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

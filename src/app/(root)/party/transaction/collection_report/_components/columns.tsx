'use client'

import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { ColumnDef } from '@tanstack/react-table'
import { Hash, User, Coins, Trash, Eye, Calendar } from 'lucide-react'
import Column from '@/components/shared/Column'

export type Transaction = {
  id: string
  date: string
  customer_id: string
  trx_no: string
  name: string
  amount: number
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Column
        icon={<Hash className='size-3' />}
        label='SL'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    )
  },
  {
    accessorKey: 'date',
    header: () => <Column icon={<Calendar className='size-3' />} label='Date' />
  },
  {
    accessorKey: 'customer_id',
    header: () => <Column icon={<User className='size-3' />} label='C.ID' />
  },

  {
    accessorKey: 'trx_no',
    header: () => (
      <Column
        icon={<FaMoneyBillTransfer className='size-3' />}
        label='Trx No'
      />
    )
  },
  {
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },

  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />
  }
]

'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Calendar, Coins, Hash, Phone, TicketCheck, User } from 'lucide-react'
import Column from '@/components/shared/Column'
import Link from 'next/link'

export type Purchase = {
  id: string
  date: string
  voucher_no: string
  supplier_name: string
  mobile: string
  total: number
  paid: number
  due: number
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
    accessorKey: 'supplier_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Supplier Name' />
    )
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'total',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Total (TK)' />
    )
  },
  {
    accessorKey: 'paid',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Paid (TK)' />
    )
  },
  {
    accessorKey: 'due',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Due (TK)' />
    ),
    cell: ({ row }) => {
      const { due } = row.original
      return <div className='flex justify-end'>{due}</div>
    }
  }
]

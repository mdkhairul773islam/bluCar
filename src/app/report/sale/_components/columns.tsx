'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  Hash,
  MapPin,
  Phone,
  TicketCheck,
  User
} from 'lucide-react'
import Column from '@/components/shared/Column'

export type Sale = {
  id: string
  date: string
  voucher_no: string
  client_name: string
  address: string
  amount: number
  paid: number
  due: number
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
    accessorKey: 'client_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Client Name' />
    )
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPin className='size-3' />} label='Address' />
    )
  },
  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />
  },
  {
    accessorKey: 'paid',
    header: () => <Column icon={<Coins className='size-3' />} label='Paid' />
  },
  {
    accessorKey: 'due',
    header: () => <Column icon={<Coins className='size-3' />} label='Total' />,
    cell: ({ row }) => {
      const { due } = row.original

      return <div className='flex justify-end '>{due}</div>
    }
  }
]

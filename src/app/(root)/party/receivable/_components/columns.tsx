'use client'

import { Badge } from '@/components/ui/badge'
import Column from '@/components/shared/Column'
import { ColumnDef } from '@tanstack/react-table'
import { Hash, User, MapPinned } from 'lucide-react'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

export type Party = {
  id: string
  name: string
  address: string
  balance: number
  status: 'Receivable'
}

export const columns: ColumnDef<Party>[] = [
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
    accessorKey: 'name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Client Name' />
    )
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
    )
  },
  {
    accessorKey: 'balance',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Balance (TK)' />
    )
  },

  {
    accessorKey: 'status',
    header: () => (
      <Column
        icon={<FaMoneyBillTransfer className='size-3' />}
        label='Transaction Type'
      />
    ),
    cell: ({ row }) => {
      const { status } = row.original

      return (
        <>
          {status === 'Receivable' && (
            <Badge className=' rounded-full bg-green-600 font-medium'>
              {status}
            </Badge>
          )}
        </>
      )
    }
  }
]

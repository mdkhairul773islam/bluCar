'use client'

import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { ColumnDef } from '@tanstack/react-table'
import {
  Hash,
  Lightbulb,
  PhoneCall,
  User,
  Coins,
  Trash,
  Eye,
  Calendar
} from 'lucide-react'
import EditTransaction from './EditTransaction'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type Transaction = {
  id: string
  date: string
  name: string
  trx_no: string
  transaction_type: 'Receivable' | 'Payable'
  transaction_by: string
  username: string
  paid: number
  remission: number
  transation_method: string
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
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
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
    accessorKey: 'transaction_type',
    header: () => (
      <Column
        icon={<FaMoneyBillTransfer className='size-3' />}
        label='Transaction Type'
      />
    )
  },
  {
    accessorKey: 'transaction_by',
    header: () => (
      <Column
        icon={<FaMoneyBillTransfer className='size-3' />}
        label='Transaction By'
      />
    )
  },
  {
    accessorKey: 'username',
    header: () => <Column icon={<User className='size-3' />} label='Username' />
  },
  {
    accessorKey: 'paid',
    header: () => <Column icon={<Coins className='size-3' />} label='Paid' />
  },
  {
    accessorKey: 'remission',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Remission' />
    )
  },
  {
    accessorKey: 'transaction_type',
    header: () => (
      <Column
        icon={<FaMoneyBillTransfer className='size-3' />}
        label='Transaction Type'
      />
    ),
    cell: ({ row }) => {
      const { transaction_type } = row.original

      return (
        <>
          {transaction_type === 'Receivable' ? (
            <Badge className=' rounded-full bg-green-600 font-medium'>
              {transaction_type}
            </Badge>
          ) : (
            <Badge className=' rounded-full bg-red-600 font-medium'>
              {transaction_type}
            </Badge>
          )}
        </>
      )
    }
  },
  {
    accessorKey: 'transation_method',
    header: () => (
      <Column
        icon={<PhoneCall className='size-3' />}
        label='Transaction Method'
      />
    )
  },

  {
    id: 'actions',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Actions' />
    ),
    cell: ({ row }) => {
      const { id }: { id: string } = row.original

      return (
        <>
          <div className='flex items-center justify-end gap-2'>
            <Button size='icon' className='show-button'>
              <Eye className='size-4' />
            </Button>

            <EditTransaction />

            <Button size='icon' className='delete-button'>
              <Trash className='size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

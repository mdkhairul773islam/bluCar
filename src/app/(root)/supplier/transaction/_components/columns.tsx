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
import { formatDate } from 'date-fns'
import Link from 'next/link'

export type Transaction = {
  id: number
  transaction_at: Date
  showroom_id: string
  party_code: string
  relation: string
  credit: number
  debit: number
  commission: number
  transaction_method: string
  transaction_type: 'receive' | 'paid'
  remark: string
  transaction_by: string
  paid_by: string
  status: string
  created_at: Date
  updated_at: Date
  name: string
  showrooms: string
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
    header: () => (
      <Column icon={<Calendar className='size-3' />} label='Date' />
    ),
    cell: ({ row }) => {
      return formatDate(row.original.transaction_at, 'PPP')
    }
  },
  {
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'relation',
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
    accessorKey: 'debit',
    header: () => <Column icon={<Coins className='size-3' />} label='Debit' />
  },
  {
    accessorKey: 'credit',
    header: () => <Column icon={<Coins className='size-3' />} label='Credit' />
  },
  {
    accessorKey: 'commission',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Commission' />
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
          {transaction_type === 'receive' ? (
            <Badge className=' rounded-full bg-green-600 font-medium'>
              {transaction_type}
            </Badge>
          ) : (
            <Badge className='rounded-full bg-red-600 font-medium'>
              {transaction_type}
            </Badge>
          )}
        </>
      )
    }
  },
  {
    accessorKey: 'transaction_method',
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
      const { id } = row.original

      return (
        <>
          <div className='flex items-center justify-end gap-2'>
            <Link href={`/supplier/transaction/show/${id}`}>
              <Button size='icon' className='show-button'>
                <Eye className='size-4' />
              </Button>
            </Link>

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

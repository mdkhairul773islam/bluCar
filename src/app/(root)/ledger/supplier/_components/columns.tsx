'use client'

import Column from '@/components/shared/Column'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Coins, Hash, Lightbulb, User } from 'lucide-react'

export type Supplier = {
  id: string
  supplier_name: string
  opening_balance: number
  debit: number
  credit: number
  balance: number
  remission?: number
  status: 'Receivable' | 'Payable'
}

export const columns: ColumnDef<Supplier>[] = [
  {
    id: 'Select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
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
    accessorKey: 'supplier_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Supplier Name' />
    )
  },
  {
    accessorKey: 'opening_balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Opening Balance' />
    ),
    cell: ({ row }) => {
      const { opening_balance, status } = row.original

      return (
        <>
          {opening_balance} [{status}]
        </>
      )
    }
  },
  {
    accessorKey: 'debit',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Debit (Tk)' />
    )
  },
  {
    accessorKey: 'credit',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Credit (Tk)' />
    )
  },
  {
    accessorKey: 'balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Balance (Tk)' />
    ),
    cell: ({ row }) => {
      const { balance, remission } = row.original

      return (
        <div>
          {balance}
          {remission && (
            <span className='block text-red-500'>Remission: {remission}</span>
          )}
        </div>
      )
    }
  },
  {
    accessorKey: 'status',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original

      return (
        <div className='flex justify-end'>
          <Badge
            className={`${status === 'Receivable' ? 'bg-green-600' : 'bg-red-600'} ml-auto rounded-full`}
          >
            {status}
          </Badge>
        </div>
      )
    }
  }
]

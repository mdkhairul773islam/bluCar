'use client'

import Column from '@/components/shared/Column'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  HandCoins,
  Hash,
  Landmark,
  Lightbulb,
  List,
  NotebookTabs,
  Store,
  Trash,
  User,
  User2
} from 'lucide-react'

export type Ledger = {
  id: string
  bank_name: string
  account_number: string
  initial_balance: number
  total_withdraw: number
  total_payment: number
  amount: number
}

export const columns: ColumnDef<Ledger>[] = [
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
    accessorKey: 'bank_name',
    header: () => (
      <Column icon={<Landmark className='size-3' />} label='Bank Name' />
    )
  },
  {
    accessorKey: 'account_number',
    header: () => (
      <Column icon={<User className='size-3' />} label='Account Number' />
    )
  },
  {
    accessorKey: 'initial_balance',
    header: () => (
      <Column
        icon={<NotebookTabs className='size-3' />}
        label='Initial Balance'
      />
    )
  },
  {
    accessorKey: 'total_withdraw',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Total Withdraw' />
    )
  },
  {
    accessorKey: 'total_payment',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Total Payment' />
    )
  },
  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />
  }
]

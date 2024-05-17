'use client'

import Column from '@/components/shared/Column'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  Hash,
  Landmark,
  Sheet,
  Store,
  User
} from 'lucide-react'

export type MdTransaction = {
  id: string
  date: string
  godown_name: string
  debit: number
  credit: number
  balance: number
}

export const columns: ColumnDef<MdTransaction>[] = [
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
    accessorKey: 'date',
    header: () => <Column icon={<Calendar className='size-3' />} label='Date' />
  },

  {
    accessorKey: 'godown_name',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Godown Name' />
    )
  },
  {
    accessorKey: 'credit',
    header: () => <Column icon={<Coins className='size-3' />} label='Credit' />
  },
  {
    accessorKey: 'debit',
    header: () => <Column icon={<Coins className='size-3' />} label='Debit' />
  },
  {
    accessorKey: 'balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Balance' />
    ),
    cell: ({ row }) => {
      const { balance } = row.original

      return <div className='flex justify-end'>{balance}</div>
    }
  }
]

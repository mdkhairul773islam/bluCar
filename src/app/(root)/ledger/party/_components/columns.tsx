'use client'

import Column from '@/components/shared/Column'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Coins, Hash, Lightbulb, MapPinned, User } from 'lucide-react'

export type Party = {
  id: string
  party_name: string
  address: string
  opening_balance: number
  debit: number
  credit: number
  balance: number
  status: 'Receivable' | 'Payable'
}

export const columns: ColumnDef<Party>[] = [
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
    accessorKey: 'party_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Party Name' />
    )
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
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
    )
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

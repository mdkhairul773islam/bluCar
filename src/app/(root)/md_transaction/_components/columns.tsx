'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  Hash,
  Landmark,
  Lightbulb,
  Sheet,
  Store,
  Trash,
  User
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import EditMdTransaction from './EditMdTransaction'
import Column from '@/components/shared/Column'

export type MdTransaction = {
  id: string
  date: string
  trx_type: 'Deposit' | 'Withdraw'
  amount: number
  godown_name: string
  remark: string
  username: string
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
    accessorKey: 'trx_type',
    header: () => (
      <Column icon={<Landmark className='size-3' />} label='Trx Type' />
    )
  },
  {
    accessorKey: 'amount',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Amount (Tk)' />
    )
  },
  {
    accessorKey: 'godown_name',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Godown Name' />
    )
  },
  {
    accessorKey: 'remark',
    header: () => <Column icon={<Sheet className='size-3' />} label='Remark' />
  },
  {
    accessorKey: 'username',
    header: () => <Column icon={<User className='size-3' />} label='Username' />
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
            <EditMdTransaction />

            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  HandCoins,
  Hash,
  Lightbulb,
  List,
  Store,
  Trash,
  User,
  User2
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type FixedAsset = {
  id: string
  date: string
  field_name: string
  description: string
  spend_by: string
  quantity: number
  amount: number
  showroom: string
}

export const columns: ColumnDef<FixedAsset>[] = [
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
    accessorKey: 'field_name',
    header: () => (
      <Column
        icon={<HandCoins className='size-3' />}
        label='Field of Fixed Asset'
      />
    )
  },
  {
    accessorKey: 'description',
    header: () => (
      <Column icon={<List className='size-3' />} label='Description' />
    )
  },
  {
    accessorKey: 'spend_by',
    header: () => <Column icon={<User2 className='size-3' />} label='Spender' />
  },
  {
    accessorKey: 'quantity',
    header: () => <Column icon={<User className='size-3' />} label='Quantity' />
  },
  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />
  },
  {
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
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
            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

'use client'

import Column from '@/components/shared/Column'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Calendar, Coins, Hash, Sheet } from 'lucide-react'

export type DatewiseStock = {
  id: string
  date: string
  voucher_no: string
  details: string
  pq: number
  sq: number
  prq: number
  st: number
  dp: number
  ep: number
  stock: number
}

export const columns: ColumnDef<DatewiseStock>[] = [
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
    accessorKey: 'voucher_no',
    header: () => (
      <Column icon={<Sheet className='size-3' />} label='Voucher No' />
    )
  },
  {
    accessorKey: 'details',
    header: () => <Column icon={<Coins className='size-3' />} label='Details' />
  },
  {
    accessorKey: 'pq',
    header: () => <Column icon={<Coins className='size-3' />} label='PQ' />
  },
  {
    accessorKey: 'sq',
    header: () => <Column icon={<Coins className='size-3' />} label='SQ' />
  },
  {
    accessorKey: 'prq',
    header: () => <Column icon={<Coins className='size-3' />} label='PRQ' />
  },
  {
    accessorKey: 'st',
    header: () => <Column icon={<Coins className='size-3' />} label='ST' />
  },
  {
    accessorKey: 'dp',
    header: () => <Column icon={<Coins className='size-3' />} label='DP' />
  },
  {
    accessorKey: 'ep',
    header: () => <Column icon={<Coins className='size-3' />} label='EP' />
  },
  {
    accessorKey: 'stock',
    header: () => <Column icon={<Coins className='size-3' />} label='Stock' />
  }
]

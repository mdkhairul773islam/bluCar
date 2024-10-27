'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Code2,
  Coins,
  Hash,
  Lightbulb,
  List,
  ShoppingBag,
  Store,
  Trash,
  Trash2
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type Expenditure = {
  id: string
  date: string
  showroom: string
  expenditure_type: string
  product_name: string
  order_no: string
  remarks: string
  amount: number
}

export const columns: ColumnDef<Expenditure>[] = [
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
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    )
  },
  {
    accessorKey: 'expenditure_type',
    header: () => <Column icon={<Trash2 className='size-3' />} label='Fields' />
  },
  {
    accessorKey: 'product_name',
    header: () => (
      <Column icon={<ShoppingBag className='size-3' />} label='Product' />
    )
  },
  {
    accessorKey: 'order_no',
    header: () => (
      <Column icon={<Code2 className='size-3' />} label='Order No' />
    )
  },
  {
    accessorKey: 'remarks',
    header: () => <Column icon={<List className='size-3' />} label='Remarks' />
  },

  {
    accessorKey: 'amount',
    header: () => <Column icon={<Coins className='size-3' />} label='Amount' />
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

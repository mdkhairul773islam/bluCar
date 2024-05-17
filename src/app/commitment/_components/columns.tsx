'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Eye,
  HandCoins,
  Hash,
  Lightbulb,
  MapPinned,
  Phone,
  Store,
  Trash
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import EditCommitment from './EditCommitment'
import Column from '@/components/shared/Column'

export type Commitment = {
  id: string
  customer_name: string
  date: string
  mobile: string
  commitment: string
  address: string
}

export const columns: ColumnDef<Commitment>[] = [
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
    accessorKey: 'customer_name',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Customer Name' />
    )
  },
  {
    accessorKey: 'date',
    header: () => <Column icon={<Calendar className='size-3' />} label='Date' />
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'commitment',
    header: () => (
      <Column icon={<HandCoins className='size-3' />} label='Commitment' />
    )
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
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
              <Eye className=' size-4' />
            </Button>

            <EditCommitment />

            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

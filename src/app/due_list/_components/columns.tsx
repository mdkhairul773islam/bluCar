'use client'

import Column from '@/components/shared/Column'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Code,
  Code2,
  Coins,
  Hash,
  Lightbulb,
  MapPinned,
  Phone,
  User
} from 'lucide-react'

export type Due = {
  id: string
  date: string
  godown_code: string
  promise_date: string
  name: string
  mobile: string
  address: string
  voucher: string
  grand_total: number
  paid: number
  due: number
}

export const columns: ColumnDef<Due>[] = [
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
    accessorKey: 'godown_code',
    header: () => (
      <Column icon={<Code className='size-3' />} label='Godown Code' />
    )
  },
  {
    accessorKey: 'promise_date',
    header: () => (
      <Column icon={<Calendar className='size-3' />} label='Promise Date	' />
    )
  },
  {
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Date' />
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
    )
  },
  {
    accessorKey: 'voucher',
    header: () => <Column icon={<Code2 className='size-3' />} label='Voucher' />
  },
  {
    accessorKey: 'grand_total',
    header: () => (
      <Column icon={<Code2 className='size-3' />} label='Grand Total' />
    )
  },
  {
    accessorKey: 'paid',
    header: () => <Column icon={<Coins className='size-3' />} label='Paid' />
  },
  {
    accessorKey: 'due',
    header: () => <Column icon={<Coins className='size-3' />} label='Due' />
  },
  {
    id: 'actions',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Actions' />
    ),
    cell: ({ row }) => {
      const { id } = row.original

      return (
        <div className='flex justify-end'>
          <Button className='show-button'>Due Collect</Button>
        </div>
      )
    }
  }
]

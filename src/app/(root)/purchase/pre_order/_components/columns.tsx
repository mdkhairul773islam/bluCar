'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Coins,
  Edit,
  Eye,
  Hash,
  Lightbulb,
  List,
  Phone,
  RotateCcw,
  Store,
  TicketCheck,
  Trash,
  User
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type PreOrder = {
  id: string
  date: string
  voucher_no: string
  supplier_name: string
  mobile: string
  username: string
  total: number
  paid: number
  due: number
  remark: string
  showroom: string
}

export const columns: ColumnDef<PreOrder>[] = [
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
      <Column icon={<TicketCheck className='size-3' />} label='Voucher No' />
    )
  },
  {
    accessorKey: 'supplier_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Supplier Name' />
    )
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'username',
    header: () => <Column icon={<User className='size-3' />} label='Username' />
  },
  {
    accessorKey: 'total',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Total (TK)' />
    )
  },
  {
    accessorKey: 'paid',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Paid (TK)' />
    )
  },
  {
    accessorKey: 'due',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Due (TK)' />
    )
  },
  {
    accessorKey: 'remark',
    header: () => <Column icon={<List className='size-3' />} label='Remark' />
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
            <Button size='icon' className='show-button'>
              <Eye className='size-4' />
            </Button>

            <Button size='icon' className='edit-button'>
              <Edit className='size-4' />
            </Button>

            <Button size='icon' className='show-button bg-sky-500'>
              <RotateCcw className='size-4' />
            </Button>

            <Button size='icon' className='delete-button'>
              <Trash className='size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

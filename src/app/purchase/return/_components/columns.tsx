'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Code,
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

export type PurchaseReturn = {
  id: string
  date: string
  username: string
  product_code: string
  quantity: string
  purchase_price: number
  return_amount: number
  showroom: string
}

export const columns: ColumnDef<PurchaseReturn>[] = [
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
    accessorKey: 'username',
    header: () => <Column icon={<User className='size-3' />} label='Username' />
  },
  {
    accessorKey: 'product_code',
    header: () => (
      <Column icon={<Code className='size-3' />} label='Product Code' />
    )
  },
  {
    accessorKey: 'quantity',
    header: () => <Column icon={<Code className='size-3' />} label='Quantity' />
  },
  {
    accessorKey: 'purchase_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Purchase Price' />
    )
  },
  {
    accessorKey: 'return_amount',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Return Amount' />
    )
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

            <Button size='icon' className='delete-button'>
              <Trash className='size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]


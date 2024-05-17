'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Hash,
  Lightbulb,
  LocateFixed,
  PhoneCall,
  User,
  Calculator,
  Store,
  User2,
  Coins,
  Trash,
  Eye
} from 'lucide-react'
import EditSupplier from './EditSupplier'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type Supplier = {
  id: string
  date: string
  showroom: string
  name: string
  contact_person: string
  mobile: string
  current_balance: number
  type: 'Receivable' | 'Payable'
  status: 'Active' | 'Inactive'
}

export const columns: ColumnDef<Supplier>[] = [
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
        label='SL'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    )
  },
  {
    accessorKey: 'date',
    header: () => (
      <Column icon={<Calculator className='size-3' />} label='Date' />
    )
  },
  {
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    )
  },
  {
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'contact_person',
    header: () => (
      <Column icon={<User2 className='size-3' />} label='Contact Person' />
    )
  },
  {
    accessorKey: 'mobile',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Mobile' />
    )
  },
  {
    accessorKey: 'current_balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Current Balance' />
    ),
    cell: ({ row }) => {
      const { current_balance, type } = row.original

      return (
        <>
          {type === 'Receivable' ? (
            <span className=' font-medium text-green-600'>
              {current_balance}
            </span>
          ) : (
            <span className=' font-medium text-red-600'>{current_balance}</span>
          )}
        </>
      )
    }
  },
  {
    accessorKey: 'type',
    header: () => (
      <Column icon={<LocateFixed className='size-3' />} label='Type' />
    ),
    cell: ({ row }) => {
      const { type } = row.original

      return (
        <>
          {type === 'Receivable' ? (
            <Badge className='rounded-full bg-green-600'>Receivable</Badge>
          ) : (
            <Badge className='rounded-full bg-red-600'>Payable</Badge>
          )}
        </>
      )
    }
  },
  {
    accessorKey: 'status',
    header: () => (
      <Column icon={<LocateFixed className='size-3' />} label='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original

      return (
        <>
          {status === 'Active' ? (
            <Badge className='rounded-full bg-green-600'>Active</Badge>
          ) : (
            <Badge className='rounded-full bg-red-600'>Inactive</Badge>
          )}
        </>
      )
    }
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

            <EditSupplier />

            <Button size='icon' className='delete-button'>
              <Trash className='size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

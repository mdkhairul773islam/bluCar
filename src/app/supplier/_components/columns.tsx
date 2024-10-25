'use client'

import {
  Hash,
  Lightbulb,
  LocateFixed,
  PhoneCall,
  User,
  Store,
  User2,
  Coins,
  Trash,
  Eye,
  Calendar
} from 'lucide-react'
import EditSupplier from './EditSupplier'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'
import { ColumnDef } from '@tanstack/react-table'
import dateFormat from '@/lib/dateFormat'
import DeleteSupplier from './DeleteSupplier'
import Link from 'next/link'

export type Supplier = {
  id: number
  showroom_id: number
  date: Date
  name: string
  code: string
  contact_person: string
  mobile: string
  address: string
  initial_balance: number
  status: 'Receivable' | 'Payable'
  created_at: Date
  updated_at: Date
}

export const columns: ColumnDef<Supplier>[] = [
  {
    accessorKey: 'serial',
    header: ({ column }) => (
      <Column
        icon={<Hash className='size-3' />}
        label='SL'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: ({ row }) => <>{row.index + 1}</>
  },
  {
    accessorKey: 'date',
    header: ({ column }) => (
      <Column
        icon={<Calendar className='size-3' />}
        label='Date'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: ({ row }) => {
      const { date } = row.original

      return <>{dateFormat(date)}</>
    }
  },
  {
    accessorKey: 'showroom_id',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom Id' />
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
    accessorKey: 'initial_balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Initial Balance' />
    ),
    cell: ({ row }) => {
      const { initial_balance, status } = row.original

      return (
        <>
          {status === 'Receivable' ? (
            <span className=' font-medium text-green-600'>
              {initial_balance}
            </span>
          ) : (
            <span className=' font-medium text-red-600'>{initial_balance}</span>
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
          {status === 'Receivable' ? (
            <Badge className='rounded-full bg-green-600'>Receivable</Badge>
          ) : (
            <Badge className='rounded-full bg-red-600'>Payable</Badge>
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
      const { id }: { id: number } = row.original

      return (
        <>
          <div className='flex items-center justify-end gap-2'>
            <Link href={`/supplier/show/${id}`}>
              <Button size='icon' className='show-button'>
                <Eye className='size-4' />
              </Button>
            </Link>

            <EditSupplier supplier={row.original} />

            <DeleteSupplier id={id} />
          </div>
        </>
      )
    }
  }
]

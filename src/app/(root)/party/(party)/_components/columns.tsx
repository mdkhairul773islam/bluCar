'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Award,
  Calendar,
  Coins,
  Edit,
  Eye,
  Hash,
  ImageIcon,
  Lightbulb,
  Map,
  MapPinned,
  Phone,
  Store,
  Trash,
  User,
  User2
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'
import { Badge } from '@/components/ui/badge'

export type Party = {
  id: string
  customer_id: string
  party_name: string
  address: string
  mobile: string
  guarantor_name: string
  balance: number
  credit_limit: number
  zone_name: string
  showroom: string
  status: 'Receivable' | 'Payable'
}

export const columns: ColumnDef<Party>[] = [
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
    accessorKey: 'customer_id',
    header: () => <Column icon={<User className='size-3' />} label='C.ID' />
  },
  {
    accessorKey: 'party_name',
    header: () => (
      <Column icon={<User2 className='size-3' />} label='Party Name' />
    )
  },
  {
    accessorKey: 'address',
    header: () => (
      <Column icon={<MapPinned className='size-3' />} label='Address' />
    )
  },
  {
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'guarantor_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Guarantor Name' />
    )
  },
  {
    accessorKey: 'balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Balance' />
    ),
    cell: ({ row }) => {
      const { status, balance } = row.original
      return (
        <span
          className={`font-medium ${status === 'Receivable' ? 'text-green-600' : 'text-red-600'}`}
        >
          {balance}
        </span>
      )
    }
  },
  {
    accessorKey: 'credit_limit',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Credit Limit' />
    )
  },
  {
    accessorKey: 'zone_name',
    header: () => <Column icon={<Map className='size-3' />} label='Zone Name' />
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
              <Eye className=' size-4' />
            </Button>

            <Button size='icon' className='edit-button'>
              <Edit className=' size-4' />
            </Button>

            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Hash,
  Lightbulb,
  LocateFixed,
  PhoneCall,
  User,
  MapPinned,
  Trash
} from 'lucide-react'

import EditProduct from './EditProduct'
import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type Product = {
  id: string
  name: string
  product_code: string
  category: string
  brand: string
  purchase_price: number
  sale_price: number
  unit: string
  status: 'Available' | 'Not Available'
}

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: 'name',
    header: () => <Column icon={<User className='size-3' />} label='Name' />
  },
  {
    accessorKey: 'product_code',
    header: () => (
      <Column icon={<User className='size-3' />} label='Product Code' />
    )
  },
  {
    accessorKey: 'category',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Category' />
    ),
    cell: ({ row }) => {
      const { category }: { category: string } = row.original

      return <>{category ? category : '-'}</>
    }
  },
  {
    accessorKey: 'brand',
    header: () => (
      <Column icon={<PhoneCall className='size-3' />} label='Brand' />
    ),
    cell: ({ row }) => {
      const { brand }: { brand: string } = row.original

      return <>{brand ? brand : '-'}</>
    }
  },

  {
    accessorKey: 'purchase_price',
    header: () => (
      <Column
        icon={<LocateFixed className='size-3' />}
        label='Purchase Price'
      />
    )
  },
  {
    accessorKey: 'sale_price',
    header: () => (
      <Column icon={<LocateFixed className='size-3' />} label='Sale Price' />
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
            <EditProduct />
            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

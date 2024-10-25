'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import {
  Hash,
  Lightbulb,
  LocateFixed,
  PhoneCall,
  User,
  Trash,
  Calendar,
  PackageOpen,
  Award,
  LayoutPanelLeft,
  Coins
} from 'lucide-react'

import EditProduct from './EditProduct'
import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'
import dateFormat from '@/lib/dateFormat'
import DeleteProduct from './DeleteProduct'

export type Product = {
  id: number
  name: string
  model: string | null
  category_id: number
  brand_id: number
  purchase_price: number
  sale_price: number
  low_level: number | null
  created_at: Date
}

export const columns: ColumnDef<Product>[] = [
  // {
  //   id: 'Select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label='Select all'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={value => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false
  // },
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
    header: () => (
      <Column icon={<PackageOpen className='size-3' />} label='Name' />
    )
  },

  {
    accessorKey: 'model',
    header: () => <Column icon={<User className='size-3' />} label='Model' />,
    cell: ({ row }) => {
      const { model }: { model: string | null } = row.original

      return <>{model ? model : '-'}</>
    }
  },
  {
    accessorKey: 'category',
    header: () => (
      <Column icon={<LayoutPanelLeft className='size-3' />} label='Category' />
    ),
    cell: ({ row }) => {
      const { category_id }: { category_id: number } = row.original

      return <>{category_id}</>
    }
  },
  {
    accessorKey: 'brand',
    header: () => <Column icon={<Award className='size-3' />} label='Brand' />,
    cell: ({ row }) => {
      const { brand_id }: { brand_id: number } = row.original

      return <>{brand_id}</>
    }
  },

  {
    accessorKey: 'purchase_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Purchase Price' />
    )
  },
  {
    accessorKey: 'sale_price',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Sale Price' />
    )
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <Column
        icon={<Calendar className='size-3' />}
        label='Date'
        onclick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: ({ row }) => {
      const { created_at } = row.original

      return <>{dateFormat(created_at)}</>
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
            <EditProduct product={row.original} />

            {/* Delete product  */}
            <DeleteProduct id={id} />
          </div>
        </>
      )
    }
  }
]

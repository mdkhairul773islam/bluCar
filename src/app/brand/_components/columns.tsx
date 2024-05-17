'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import { Hash, LayoutPanelLeft, Lightbulb, Trash, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import EditBrand from './EditBrand'
import Column from '@/components/shared/Column'

export type Brand = {
  id: string
  name: string
}

export const columns: ColumnDef<Brand>[] = [
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
    header: () => (
      <Column
        icon={<LayoutPanelLeft className='size-3' />}
        label='Brand Name'
      />
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
            <EditBrand />
            <Button size='icon' className='delete-button'>
              <Trash className=' size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

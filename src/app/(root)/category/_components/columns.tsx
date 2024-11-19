'use client'

import EditCategory from './EditCategory'
import { BiDetail } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'
import { ColumnDef } from '@tanstack/react-table'
import { Calendar, Hash, LayoutPanelLeft, Lightbulb, Trash } from 'lucide-react'
import DeleteCategory from './DeleteCategory'
import dateFormat from '@/lib/dateFormat'

export type Category = {
  id: number
  name: string
  description: string | null
  created_at: Date
}

export const columns: ColumnDef<Category>[] = [
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
    accessorKey: 'name',
    header: () => (
      <Column
        icon={<LayoutPanelLeft className='size-3' />}
        label='Category Name'
      />
    )
  },
  {
    accessorKey: 'description',
    header: () => (
      <Column icon={<BiDetail className='size-3' />} label='Description' />
    ),
    cell: ({ row }) => {
      const { description } = row.original

      return description ? description : '-'
    }
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
            <EditCategory category={row.original} />

            <DeleteCategory id={id} />
          </div>
        </>
      )
    }
  }
]

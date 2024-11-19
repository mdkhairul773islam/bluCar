'use client'

import EditField from './EditField'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Boxes, Hash, Lightbulb } from 'lucide-react'
import Column from '@/components/shared/Column'

export type Field = {
  id: string
  name: string
}

export const columns: ColumnDef<Field>[] = [
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
        icon={<Boxes className='size-3' />}
        label='Field of Fixed Assate	'
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
            <EditField />
          </div>
        </>
      )
    }
  }
]

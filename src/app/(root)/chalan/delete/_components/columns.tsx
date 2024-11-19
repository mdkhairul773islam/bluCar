'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Calendar,
  Edit,
  Eye,
  Hash,
  Lightbulb,
  TicketCheck,
  Trash,
  User
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'

export type Chalan = {
  id: string
  date: string
  client_name: string
  chalan_no: string
}

export const columns: ColumnDef<Chalan>[] = [
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
    accessorKey: 'client_name',
    header: () => (
      <Column icon={<User className='size-3' />} label='Client Name' />
    )
  },
  {
    accessorKey: 'chalan_no',
    header: () => (
      <Column icon={<TicketCheck className='size-3' />} label='Chalan No' />
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
          </div>
        </>
      )
    }
  }
]

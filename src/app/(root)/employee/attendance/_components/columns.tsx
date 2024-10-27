'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Award,
  Calendar,
  Clock,
  Edit,
  Eye,
  Hash,
  Lightbulb,
  Phone,
  Store,
  TicketCheck,
  Trash,
  User
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Column from '@/components/shared/Column'

export type Attendance = {
  id: string
  date: string
  showroom: string
  name: string
  mobile: string
  designation: string
  start_time: string
  end_time: string
  status: 'Attend' | 'Absent' | 'Leave' | 'Holiday'
}

export const columns: ColumnDef<Attendance>[] = [
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
    accessorKey: 'mobile',
    header: () => <Column icon={<Phone className='size-3' />} label='Mobile' />
  },
  {
    accessorKey: 'designation',
    header: () => (
      <Column icon={<Award className='size-3' />} label='Designation' />
    )
  },
  {
    accessorKey: 'start_time',
    header: () => (
      <Column icon={<Clock className='size-3' />} label='Start Time' />
    )
  },
  {
    accessorKey: 'end_time',
    header: () => (
      <Column icon={<Clock className='size-3' />} label='End Time' />
    )
  },
  {
    accessorKey: 'status',
    header: () => (
      <Column icon={<Lightbulb className='size-3' />} label='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original

      return (
        <Badge
          className={`rounded-full ${status === 'Attend' ? 'bg-green-600' : status === 'Absent' ? 'bg-red-600' : status === 'Leave' ? 'bg-sky-600' : status === 'Holiday' ? 'bg-yellow-600' : 'bg-black'}`}
        >
          {status}
        </Badge>
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
            <Button size='icon' className='delete-button'>
              <Trash className='size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

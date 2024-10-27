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
  Phone,
  Store,
  Trash,
  User
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import Column from '@/components/shared/Column'
import { Badge } from '@/components/ui/badge'

export type Employee = {
  id: string
  showroom: string
  joining_date: string
  employee_id: string
  image: string
  name: string
  mobile: string
  designation: string
  basic_salary: number
  status: 'Enabled' | 'Disabled'
}

export const columns: ColumnDef<Employee>[] = [
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
    accessorKey: 'showroom',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Showroom' />
    )
  },
  {
    accessorKey: 'joining_date',
    header: () => (
      <Column icon={<Calendar className='size-3' />} label='Joining Date' />
    )
  },
  {
    accessorKey: 'employee_id',
    header: () => (
      <Column icon={<Hash className='size-3' />} label='Employee ID' />
    )
  },
  {
    accessorKey: 'image',
    header: () => (
      <Column icon={<ImageIcon className='size-3' />} label='Image' />
    ),
    cell: ({ row }) => {
      const { image } = row.original
      return (
        <div className='size-14 rounded-sm border bg-muted'>
          {/* <Image height={56} width={56} src={`${image}`} alt='Employee Image' /> */}
        </div>
      )
    }
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
    accessorKey: 'basic_salary',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Basic Salary' />
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
          className={`rounded-full ${status === 'Enabled' ? 'bg-green-600' : 'bg-red-600'}`}
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

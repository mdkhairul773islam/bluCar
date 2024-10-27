'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import {
  Award,
  Calendar,
  Clock,
  Coins,
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

export type Salary = {
  id: string
  date: string
  salary_month: string
  employee_info: string
  basic: number
  incentive: number
  deduction: number
  bonus_percentage: number
  bonus_tk: number
  pre_balance: number
  total_salary: number
}

export const columns: ColumnDef<Salary>[] = [
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
    accessorKey: 'salary_month',
    header: () => (
      <Column icon={<Store className='size-3' />} label='Salary Month' />
    )
  },
  {
    accessorKey: 'employee_info',
    header: () => (
      <Column icon={<User className='size-3' />} label='Employee Info' />
    )
  },
  {
    accessorKey: 'basic',
    header: () => <Column icon={<Coins className='size-3' />} label='Basic' />
  },
  {
    accessorKey: 'incentive',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Incentive' />
    )
  },
  {
    accessorKey: 'deduction',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Deduction' />
    )
  },
  {
    accessorKey: 'bonus_percentage',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Bonus Percentage' />
    )
  },
  {
    accessorKey: 'bonus_tk',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Bonus (Tk)' />
    )
  },
  {
    accessorKey: 'pre_balance',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Pre Balance' />
    )
  },
  {
    accessorKey: 'total_salary',
    header: () => (
      <Column icon={<Coins className='size-3' />} label='Total Salary' />
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
            <Button size='icon' className='edit-button'>
              <Edit className='size-4' />
            </Button>
            <Button size='icon' className='delete-button'>
              <Trash className='size-4' />
            </Button>
          </div>
        </>
      )
    }
  }
]

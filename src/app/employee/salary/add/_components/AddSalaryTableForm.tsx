'use client'

import Column from '@/components/shared/Column'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Award,
  Clock,
  Code,
  Coins,
  Hash,
  Lightbulb,
  Phone,
  Trash,
  User
} from 'lucide-react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import React from 'react'
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const AddSalaryTableForm = () => {
  return (
    <form className='flex flex-col gap-3'>
      <Table>
        <TableHeader className='bg-gray-100 dark:bg-muted'>
          <TableRow>
            <TableHead className='w-10'>
              <Column icon={<Hash className='size-3' />} label='SL' />
            </TableHead>
            <TableHead>
              <Column
                icon={<User className='size-3' />}
                label='Employee Info'
              />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Basic' />
            </TableHead>
            <TableHead className='w-32'>
              <Column icon={<Coins className='size-3' />} label='Incentive' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Deduction' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Bonus (%)' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Bonus (Tk)' />
            </TableHead>
            <TableHead className='w-32'>
              <Column
                icon={<Coins className='size-3' />}
                label='Pre. Balance'
              />
            </TableHead>
            <TableHead className='w-32'>
              <Column
                icon={<Coins className='size-3' />}
                label='Total Salary'
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>9422 - MD. BAPPY MIA - 01813121123</TableCell>
            <TableCell>
              <Input type='number' defaultValue={13500} />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue={0} />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue={0} />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue={0} />
            </TableCell>
            <TableCell>
              <Input type='number' readOnly defaultValue={0} />
            </TableCell>
            <TableCell>
              <Input type='number' readOnly defaultValue={0} />
            </TableCell>
            <TableCell>
              <Input type='number' readOnly defaultValue={0} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className='text-right'>
        <Button type='submit' className='bg-brand text-base'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default AddSalaryTableForm

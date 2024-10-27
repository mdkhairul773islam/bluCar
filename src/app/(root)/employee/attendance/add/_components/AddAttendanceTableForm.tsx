'use client'

import Column from '@/components/shared/Column'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

const AddAttendanceTableForm = () => {
  const [date, setDate] = React.useState<Date>()

  return (
    <form className='flex flex-col gap-3'>
      <Table>
        <TableHeader className='bg-gray-100 dark:bg-muted'>
          <TableRow>
            <TableHead className='w-10'>
              <Column icon={<Hash className='size-3' />} label='SL' />
            </TableHead>
            <TableHead className='w-16'>
              <Column icon={<Code className='size-3' />} label='Code' />
            </TableHead>
            <TableHead>
              <Column icon={<User className='size-3' />} label='Name' />
            </TableHead>
            <TableHead className='w-32'>
              <Column icon={<Phone className='size-3' />} label='Mobile' />
            </TableHead>
            <TableHead>
              <Column icon={<Award className='size-3' />} label='Designation' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Clock className='size-3' />} label='Start Time' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Clock className='size-3' />} label='End Time' />
            </TableHead>
            <TableHead className='w-32'>
              <Column icon={<Lightbulb className='size-3' />} label='Status' />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>3847 </TableCell>
            <TableCell>MD.INSAN ALI</TableCell>
            <TableCell>01741357109</TableCell>
            <TableCell>SALES ACCOUNTS EXECUTIVE</TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[280px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {date ? format(date, 'PPP') : <span>Start Time</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {date ? format(date, 'PPP') : <span>End Time</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </TableCell>
            <TableCell>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select status' />
                </SelectTrigger>
                <SelectContent>
                  {[
                    {
                      label: 'Attend',
                      value: 'Attend'
                    },
                    {
                      label: 'Absent',
                      value: 'Absent'
                    },
                    {
                      label: 'Leave',
                      value: 'Leave'
                    },
                    {
                      label: 'Holiday',
                      value: 'Holiday'
                    }
                  ].map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

export default AddAttendanceTableForm

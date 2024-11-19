'use client'

import Column from '@/components/shared/Column'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import {
  CalendarIcon,
  Code,
  Coins,
  Hash,
  Lightbulb,
  Scale,
  ShoppingBag,
  Trash
} from 'lucide-react'
import { useState } from 'react'

const AddHireSaleTableForm = () => {
  const [isSendSms, setIsSendSms] = useState(true)
  const [date, setDate] = useState<Date>()

  return (
    <form className='flex flex-col gap-4'>
      <Table>
        <TableHeader className='bg-gray-100 dark:bg-muted'>
          <TableRow>
            <TableHead className='w-10'>
              <Column icon={<Hash className='size-3' />} label='SL' />
            </TableHead>
            <TableHead>
              <Column
                icon={<ShoppingBag className='size-3' />}
                label='Product Name'
              />
            </TableHead>
            <TableHead className='w-24'>
              <Column icon={<Scale className='size-3' />} label='Unit' />
            </TableHead>
            <TableHead className='w-24'>
              <Column icon={<Scale className='size-3' />} label='Stock' />
            </TableHead>
            <TableHead className='w-24'>
              <Column icon={<Code className='size-3' />} label='Quantity' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Sale Price ' />
            </TableHead>
            <TableHead className='w-28'>
              <Column icon={<Coins className='size-3' />} label='Total' />
            </TableHead>
            <TableHead className='w-10'>
              <Column icon={<Lightbulb className='size-3' />} label='Action' />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <Input
                defaultValue='AC PUMP KIT CIKON J31'
                name='product_name'
                readOnly
              />
            </TableCell>
            <TableCell>
              <Input defaultValue='Set' name='unit' readOnly />
            </TableCell>
            <TableCell>
              <Input defaultValue='22' type='number' name='stock' readOnly />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue='0' name='quantity' />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue='120' name='sale_price' />
            </TableCell>
            <TableCell>
              <Input type='number' defaultValue='150' name='total' readOnly />
            </TableCell>
            <TableCell>
              <div className='flex items-center justify-end'>
                <Button size='icon' className='delete-button'>
                  <Trash className='size-4' />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className='h-px bg-border'></div>

      <div className='grid gap-4 md:grid-cols-2'>
        <div className='flex flex-col gap-3'>
          {/* Party */}
          <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
            <Label className='text-right'>Party</Label>
            <Select defaultValue='Cash'>
              <SelectTrigger>
                <SelectValue placeholder='Select Party' />
              </SelectTrigger>
              <SelectContent>
                {[
                  {
                    label: 'Party One',
                    value: 'Party One'
                  },
                  {
                    label: 'Party Two',
                    value: 'Party Two'
                  },
                  {
                    label: 'Party Three',
                    value: 'Party Three'
                  },
                  {
                    label: 'Party Four',
                    value: 'Party Four'
                  }
                ].map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile */}
          <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
            <Label className='text-right'>Mobile</Label>
            <Input type='number' name='mobile' readOnly />
          </div>

          {/* Address */}
          <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
            <Label className='text-right'>Address</Label>
            <Textarea className='min-h-28' name='address' readOnly />
          </div>

          {/* Remark */}
          <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
            <Label className='text-right'>Remark</Label>
            <Textarea placeholder='Remark' className='min-h-28' name='remark' />
          </div>

          {/* Reference */}
          <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
            <Label className='text-right'>Reference</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Select Reference' />
              </SelectTrigger>
              <SelectContent>
                {[
                  {
                    label: 'Reference One',
                    value: 'Reference One'
                  },
                  {
                    label: 'Reference Two',
                    value: 'Reference Two'
                  },
                  {
                    label: 'Reference Three',
                    value: 'Reference Three'
                  },
                  {
                    label: 'Reference Four',
                    value: 'Reference Four'
                  }
                ].map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Send SMS */}
          <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
            <Label className='text-right'>Send SMS</Label>
            <Switch
              checked={isSendSms}
              onCheckedChange={() => setIsSendSms(!isSendSms)}
            />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          {/* Total Quantity */}
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Total Quantity</Label>
            <Input
              type='number'
              defaultValue={0.0}
              name='total_quantity'
              readOnly
            />
          </div>

          {/* Subtotal */}
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Subtotal</Label>
            <Input type='number' defaultValue={0.0} name='subtotal' readOnly />
          </div>

          {/* Previous Balance */}
          <div className='grid grid-cols-[140px_1fr_1fr] items-center gap-4'>
            <Label className='text-right'>Previous Balance</Label>
            <Input
              type='number'
              defaultValue={0}
              name='previous_balance'
              readOnly
            />
            <Input defaultValue='Receivable' name='previous_sign' readOnly />
          </div>

          {/* Down Payment */}
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Down Payment</Label>
            <Input type='number' defaultValue={0.0} name='total' />
          </div>

          {/* Paid */}
          <div className='grid grid-cols-[140px_1fr_1fr] items-center gap-4'>
            <Label className='text-right'>Paid</Label>
            <Input defaultValue={0.0} name='paid' readOnly />
            <Select defaultValue='Cash'>
              <SelectTrigger>
                <SelectValue placeholder='Select Method' />
              </SelectTrigger>
              <SelectContent>
                {[
                  {
                    label: 'Cash',
                    value: 'Cash'
                  },
                  {
                    label: 'Bank',
                    value: 'Bank'
                  }
                ].map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Value Add */}
          <div className='grid grid-cols-[140px_1fr_1fr] items-center gap-4'>
            <Label className='text-right'>Value Add</Label>
            <Input defaultValue={0.0} name='added_percent' readOnly />
            <Input defaultValue={0.0} name='added_amount' readOnly />
          </div>

          {/* Hire Outstanding */}
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Hire Outstanding</Label>
            <Input
              type='number'
              defaultValue={0}
              name='hire_outstanding'
              readOnly
            />
          </div>

          {/* Total Due */}
          <div className='grid grid-cols-[140px_1fr_1fr] items-center gap-4'>
            <Label className='text-right'>Total Due</Label>
            <Input
              defaultValue={150}
              type='number'
              name='current_balance'
              readOnly
            />
            <Input defaultValue='Receivable' name='current_sign' readOnly />
          </div>

          {/* Installment Number */}
          <div className='grid grid-cols-[140px_1fr_1fr] items-center gap-4'>
            <Label className='text-right'>Installment Number</Label>
            <Input defaultValue={0} type='number' name='installment_number' />
            <Input
              defaultValue='0'
              type='number'
              name='installment_amount'
              readOnly
            />
          </div>

          {/* Installment Day   */}
          <div className='grid grid-cols-[140px_1fr] items-center gap-4'>
            <Label className='text-right'>Installment Day </Label>
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
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-full p-0'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className='text-right'>
        <Button type='submit' className='bg-brand text-base'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default AddHireSaleTableForm

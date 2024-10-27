'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

const FormSchema = z.object({
  date: z.date({
    required_error: 'Date is required.'
  }),
  showroom: z.string({
    required_error: 'Please select an showroom'
  }),
  employee: z.string({
    required_error: 'Please select an Employee'
  }),
  salary_month: z.string(),
  salary: z.coerce.number(),
  paid: z.coerce.number(),
  due: z.coerce.number()
})

const AddAdvancePaymentForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      salary: 0,
      paid: 0,
      due: 0
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-4 py-4'>
          {/* Date */}
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Showroom */}
          <FormField
            control={form.control}
            name='showroom'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Showroom</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select showroom' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'showroom one',
                        value: 'showroom one'
                      },
                      {
                        label: 'showroom two',
                        value: 'showroom two'
                      },
                      {
                        label: 'showroom three',
                        value: 'showroom three'
                      }
                    ].map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Employee */}
          <FormField
            control={form.control}
            name='employee'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a Employee' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'Employee One',
                        value: 'Employee One'
                      },
                      {
                        label: 'Employee Two',
                        value: 'Employee Two'
                      },
                      {
                        label: 'Employee Three',
                        value: 'Employee Three'
                      },
                      {
                        label: 'Employee Four',
                        value: 'Employee Four'
                      }
                    ].map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Salary Month */}
          <FormField
            control={form.control}
            name='salary_month'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary Month </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a Salary Month' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: '2024 - 01',
                        value: '2024 - 01'
                      },
                      {
                        label: '2024 - 02',
                        value: '2024 - 02'
                      },
                      {
                        label: '2024 - 03',
                        value: '2024 - 03'
                      },
                      {
                        label: '2024 - 04',
                        value: '2024 - 04'
                      }
                    ].map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Salary */}
          <FormField
            control={form.control}
            name='salary'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input type='number' readOnly placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Paid */}
          <FormField
            control={form.control}
            name='paid'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paid</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Due Salary */}
          <FormField
            control={form.control}
            name='due'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Salary</FormLabel>
                <FormControl>
                  <Input readOnly type='number' placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='bg-brand'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AddAdvancePaymentForm

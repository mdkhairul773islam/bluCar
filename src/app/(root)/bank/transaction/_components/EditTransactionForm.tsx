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
import { Textarea } from '@/components/ui/textarea'
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
    required_error: 'Date  is required.'
  }),
  bank_name: z.string({
    required_error: 'Please select an Bank Name'
  }),
  account_number: z.string({
    required_error: 'Please select an account number'
  }),
  holder_name: z.string(),
  transaction_type: z.string(),
  amount: z.coerce.number(),
  transaction_by: z.string(),
  showroom: z.string({
    required_error: 'Please select an showroom'
  }),
  particulars: z.string()
})

const EditTransactionForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
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

          {/* Bank Name */}
          <FormField
            control={form.control}
            name='bank_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select bank' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'Mutual Trust Bank LTD	',
                        value: 'Mutual Trust Bank LTD	'
                      },
                      {
                        label: 'Dutch Bangla Bank Limited	',
                        value: 'Dutch Bangla Bank Limited	'
                      },
                      {
                        label: 'Shah Jalal Islami Bank limited',
                        value: 'Shah Jalal Islami Bank limited'
                      },
                      {
                        label: 'RUPALI BANK LIMITED	',
                        value: 'RUPALI BANK LIMITED	'
                      },
                      {
                        label: 'Islami Bank Bangladesh Limited	',
                        value: 'Islami Bank Bangladesh Limited	'
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

          {/* Account Number */}
          <FormField
            control={form.control}
            name='account_number'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Account Number' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: '545412121565',
                        value: '545412121565'
                      },
                      {
                        label: '787465435451',
                        value: '787465435451'
                      },
                      {
                        label: '021215455663',
                        value: '021215455663'
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

          {/* Holder Name */}
          <FormField
            control={form.control}
            name='holder_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Holder Name</FormLabel>
                <FormControl>
                  <Input readOnly placeholder='Holder Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Transaction Type */}
          <FormField
            control={form.control}
            name='transaction_type'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Transaction type' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'Bank TT',
                        value: 'Bank TT'
                      },
                      {
                        label: 'Debit',
                        value: 'Debit'
                      },
                      {
                        label: 'Credit',
                        value: 'Credit'
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

          {/* Amount */}
          <FormField
            control={form.control}
            name='amount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Transaction By */}
          <FormField
            control={form.control}
            name='transaction_by'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction By</FormLabel>
                <FormControl>
                  <Input placeholder='Transaction By' {...field} />
                </FormControl>
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
                        label: 'Showroom One',
                        value: 'Showroom One'
                      },
                      {
                        label: 'Showroom Two',
                        value: 'Showroom Two'
                      },
                      {
                        label: 'Showroom Three',
                        value: 'Showroom Three'
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

          {/* Particulars */}
          <FormField
            control={form.control}
            name='particulars'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Particulars</FormLabel>
                <FormControl>
                  <Textarea placeholder='Particulars' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='bg-brand'>
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default EditTransactionForm

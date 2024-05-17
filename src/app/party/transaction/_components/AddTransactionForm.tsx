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
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const FormSchema = z.object({
  date: z.date({
    required_error: 'Date is required.'
  }),
  showroom: z.string(),
  name: z.string(),
  balance: z.coerce.number(),
  balance_type: z.enum(['receivable', 'payable']),
  transaction_type: z.enum(['Receive From Supplier', 'Paid To Supplier']),
  transaction_method: z.enum(['Cash', 'Cheque', 'Bkash', 'T.T', 'Cash to T.T']),
  payment: z.coerce.number(),
  remission: z.coerce.number(),
  total_balance: z.coerce.number(),
  tbalance_type: z.enum(['receivable', 'payable']),
  spand_by: z.string()
})

const AddTransactionForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      balance: 1000,
      balance_type: 'receivable',
      payment: 0,
      remission: 0,
      total_balance: 1000,
      tbalance_type: 'payable'
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

          {/* Supplier Name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supplier Name</FormLabel>
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
                        label: 'John Doe',
                        value: 'John Doe'
                      },
                      {
                        label: 'Hary Markoyiz',
                        value: 'Hary Markoyiz'
                      },
                      {
                        label: 'Dolph Zigler',
                        value: 'Dolph Zigler'
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

          {/* Balance (TK) */}
          <div className='grid grid-cols-2 items-end gap-4'>
            <FormField
              control={form.control}
              name='balance'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Balance (TK)</FormLabel>
                  <FormControl>
                    <Input readOnly type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Balance Type (TK) */}
            <FormField
              control={form.control}
              name='balance_type'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                      <SelectValue placeholder='Select Type' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'Receive From Supplier',
                        value: 'Receive From Supplier'
                      },
                      {
                        label: 'Paid To Supplier',
                        value: 'Paid To Supplier'
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

          {/* Transaction Method */}
          <FormField
            control={form.control}
            name='transaction_method'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction Method</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Method' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'Cash',
                        value: 'Cash'
                      },
                      {
                        label: 'Cheque',
                        value: 'Cheque'
                      },
                      {
                        label: 'Bkash',
                        value: 'Bkash'
                      },
                      {
                        label: 'T.T',
                        value: 'T.T'
                      },
                      {
                        label: 'Cash to T.T',
                        value: 'Cash to T.T'
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

          {/* Payment (Tk) */}
          <FormField
            control={form.control}
            name='payment'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment (Tk)</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remission (TK) */}
          <FormField
            control={form.control}
            name='remission'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remission (Tk)</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Total Balance (TK) */}
          <div className='grid grid-cols-2 items-end gap-4'>
            <FormField
              control={form.control}
              name='total_balance'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Balance (TK)</FormLabel>
                  <FormControl>
                    <Input readOnly type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Total Balance Type (TK) */}
            <FormField
              control={form.control}
              name='tbalance_type'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Spend By */}
          <FormField
            control={form.control}
            name='spand_by'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spend By</FormLabel>
                <FormControl>
                  <Input placeholder='Spend By' {...field} />
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

export default AddTransactionForm

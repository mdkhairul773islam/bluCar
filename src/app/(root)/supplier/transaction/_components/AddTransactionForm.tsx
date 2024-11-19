'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
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
import { z } from 'zod'
import { cn } from '@/lib/utils'
import toastify from '@/lib/toastify'
import { useForm } from 'react-hook-form'
import { CalendarIcon } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import transactionSchema from './transactionSchema'
import { Supplier } from '../../_components/columns'
import { zodResolver } from '@hookform/resolvers/zod'
import transactionService from '@/services/transaction-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Showroom } from '@/app/(root)/showroom/_components/columns'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

const AddTransactionForm = ({
  suppliers,
  showrooms,
  setOpen
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  suppliers: Supplier[]
  showrooms: Showroom[]
}) => {
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()
  const [supplier, setSupplier] = useState<any>(null)

  const form = useForm<z.infer<typeof transactionSchema>>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      balance_status: 'Receivable'
    }
  })

  const supplierId = form.watch('supplier_id')

  useEffect(() => {
    const sup = suppliers?.find(supplier => supplier.id == supplierId)
    // @ts-ignore
    form.setValue('party_code', sup?.code)

    setSupplier(sup)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supplierId])

  const totalBalance = supplier?.initial_balance - form.watch('payment')

  form.setValue('balance_status', totalBalance > 0 ? 'Receivable' : 'Payable')

  totalBalance

  const mutation = useMutation({
    mutationFn: transactionService.addTransaction,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['transactions'])
      toastify.success('Transaction added successfully')
      setOpen(false)
    },
    onError: (error: any) => {
      toastify.error(error.message)
    }
  })

  function onSubmit(data: z.infer<typeof transactionSchema>) {
    setLoading(true)
    const updatedData = {
      ...data,
      transaction_at: format(data.transaction_at, 'yyyy-MM-dd')
    }
    mutation.mutate(updatedData)
    setLoading(true)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-4 py-4'>
          {/* Date */}
          <FormField
            control={form.control}
            name='transaction_at'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
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

          {/* Showroom Name */}
          <FormField
            control={form.control}
            name='showroom_id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Showrooms Name</FormLabel>
                <Select
                  onValueChange={value => field.onChange(Number(value))}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select showroom' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {showrooms?.map((showroom: Showroom) => (
                      <SelectItem key={showroom.id} value={String(showroom.id)}>
                        {showroom.name}
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
            name='supplier_id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supplier Name</FormLabel>
                <Select
                  onValueChange={value => field.onChange(Number(value))}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select supplier' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {suppliers?.map((supplier: Supplier) => (
                      <SelectItem key={supplier.id} value={String(supplier.id)}>
                        {supplier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='grid grid-cols-2 items-end gap-4'>
            <div>
              <Label>Balance (TK)</Label>
              <Input
                readOnly
                value={supplier ? supplier?.initial_balance : 0}
              />
            </div>

            <Input readOnly value={supplier ? supplier?.status : ''} />
          </div>

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
                        value: 'receive'
                      },
                      {
                        label: 'Paid To Supplier',
                        value: 'paid'
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
                  <Input
                    type='number'
                    placeholder='BDT'
                    {...field}
                    onChange={event => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remission (TK) */}
          <FormField
            control={form.control}
            name='commission'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remission (Tk)</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='BDT'
                    {...field}
                    onChange={event => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Total Balance (TK) */}
          <div className='grid grid-cols-2 items-end gap-4'>
            <div>
              <Label>Total Balance (TK)</Label>
              <Input readOnly value={totalBalance || 0} />
            </div>

            {/* Total Balance status */}
            <FormField
              control={form.control}
              name='balance_status'
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
            name='remark'
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

          <Button type='submit' disabled={loading} className='bg-brand'>
            {loading ? 'Loading..' : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AddTransactionForm

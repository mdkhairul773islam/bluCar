// @ts-nocheck
'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import toastify from '@/lib/toastify'
import { cn } from '@/lib/utils'
import showroomService from '@/services/showroom-service'
import supplierService from '@/services/supplier-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { format, parseISO } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Showroom } from '../../showroom/_components/columns'
import { Supplier } from './columns'
import supplierSchema from './supplierSchema'

const EditSupplierForm = ({
  setOpen,
  supplier
}: {
  setOpen: any
  supplier: Supplier
}) => {
  const queryClient = useQueryClient()

  const {
    data: showrooms,
    isLoading: showroomLoading,
    error: showroomError
  } = useQuery({
    queryKey: ['showrooms'],
    queryFn: showroomService.getAllShowrooms
  })

  const form = useForm<z.infer<typeof supplierSchema>>({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
      address: supplier?.address,
      contact_person: supplier?.contact_person,
      // @ts-ignore
      date: supplier?.date,
      initial_balance: supplier?.initial_balance,
      mobile: supplier?.mobile,
      name: supplier?.name,
      showroom_id: supplier?.showroom_id,
      status: supplier?.status
    }
  })

  const mutation = useMutation({
    mutationFn: data => supplierService.updateSupplier(supplier.id, data),
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['suppliers'])
      toastify.success('Supplier updated successfully')
      setOpen(false)
    },
    onError: error => {
      toastify.error('Failed to update supplier')
    }
  })

  function onSubmit(data: z.infer<typeof supplierSchema>) {
    // @ts-ignore
    mutation.mutate(data)

    console.log(supplier)
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-4 py-4'>
          {/* Showroom  */}
          <FormField
            control={form.control}
            name='showroom_id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Showroom</FormLabel>
                <Select onValueChange={value => field.onChange(Number(value))}>
                  <FormControl>
                    <SelectTrigger>
                      {/* <SelectValue placeholder='Select showroom' /> */}
                      {showrooms?.find(
                        (showroom: Showroom) => showroom.id === field.value
                      )?.name || 'Select showroom'}
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
                          format(parseISO(field.value), 'PPP')
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
                      selected={field.value ? parseISO(field.value) : undefined}
                      onSelect={date => {
                        const formattedDate = date
                          ? date.toISOString().split('T')[0]
                          : ''
                        field.onChange(formattedDate)
                      }}
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

          {/* Supplier Name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supplier Name</FormLabel>
                <FormControl>
                  <Input placeholder='Supplier Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contact Person */}
          <FormField
            control={form.control}
            name='contact_person'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person</FormLabel>
                <FormControl>
                  <Input placeholder='Contact Person' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mobile */}
          <FormField
            control={form.control}
            name='mobile'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='01*********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder='Address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Initial Balance */}
          <FormField
            control={form.control}
            name='initial_balance'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Initial Balance (TK)</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='BDT' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Status */}
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex items-center space-y-1'
                  >
                    <FormItem className='flex items-center gap-1'>
                      <FormControl>
                        <RadioGroupItem value='Receivable' />
                      </FormControl>
                      <FormLabel className='mt-0! cursor-pointer font-medium'>
                        Receivable
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center gap-1'>
                      <FormControl>
                        <RadioGroupItem value='Payable' />
                      </FormControl>
                      <FormLabel className='mt-0! cursor-pointer font-medium'>
                        Payable
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={mutation.isPending}
            type='submit'
            className='bg-brand'
          >
            {mutation.isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default EditSupplierForm

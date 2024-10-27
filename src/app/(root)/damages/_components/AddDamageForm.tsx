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
    required_error: 'A date of birth is required.'
  }),
  showroom: z.string({
    required_error: 'Please select an showroom '
  }),
  product_name: z.string({
    required_error: 'Please select an showroom '
  }),
  current_stock: z.coerce.number(),
  quantity: z.coerce.number(),
  remark: z.string(),
  damage_by: z.string()
})

const AddDamageForm = () => {
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

          {/* Product Name */}
          <FormField
            control={form.control}
            name='product_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a product' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: '0431 - Ac Pamp Kit Haf J31',
                        value: '0431 - Ac Pamp Kit Haf J31'
                      },
                      {
                        label: '0633 - Air top Bati Compited boro Tafe',
                        value: '0633 - Air top Bati Compited boro Tafe'
                      },
                      {
                        label:
                          '0174 - AC ELEMENT OUTER / AIR FILTER BORO ORIGINAL SONALIKA  (11000451AA/41000739AA) B160',
                        value:
                          '0174 - AC ELEMENT OUTER / AIR FILTER BORO ORIGINAL SONALIKA  (11000451AA/41000739AA) B160'
                      },
                      {
                        label: '0044 - Air Net Compited Swaraj',
                        value: '0044 - Air Net Compited Swaraj'
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

          {/* Current Stock */}
          <FormField
            control={form.control}
            name='current_stock'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Stock</FormLabel>
                <FormControl>
                  <Input readOnly type='number' placeholder='Pcs' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Damage Quantity */}
          <FormField
            control={form.control}
            name='damage_by'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Damage Quantity</FormLabel>
                <FormControl>
                  <Input placeholder='0' type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remark */}
          <FormField
            control={form.control}
            name='remark'
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
          <Button type='submit' className='bg-brand'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AddDamageForm

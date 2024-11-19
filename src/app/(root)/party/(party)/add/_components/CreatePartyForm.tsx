'use client'

import React from 'react'
import { format } from 'date-fns'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const formSchema = z.object({
  code: z.string(),
  showroom: z.string({
    message: 'Select a Showroom'
  }),
  date: z.date(),
  name: z.string(),
  father_name: z.string(),
  contact_person: z.string(),
  mobile: z.string(),
  nid_card: z.string(),
  zone: z.string(),
  client_type: z.enum(['Client', 'Hire']),
  address: z.string(),
  initial_balance: z.coerce.number(),
  balance_type: z.enum(['receivable', 'payable']),
  credit_limit: z.coerce.number(),
  cheque_no: z.string(),
  cheque_type: z.string(),
  bank_name: z.string(),
  bank_branch: z.string(),
  cheque: z.string(),
  document: z.string(),
  guarantor_name: z.string(),
  guarantor_father_name: z.string(),
  guarantor_mobile: z.string(),
  client_status: z.enum(['Active', 'Deactive']),
  guarantor_address: z.string()

  // salary: z.coerce.number(),
})

const CreatePartyForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '01139',
      date: new Date(),
      balance_type: 'receivable',
      client_type: 'Client'
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    })
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
          <div className='grid items-start gap-5 md:grid-cols-2'>
            {/* Code */}
            <FormField
              control={form.control}
              name='code'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder='Code' readOnly {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Showroom */}
            <FormField
              control={form.control}
              name='showroom'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Showroom</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Showroom' />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          {
                            value: 'Showroom 01',
                            label: 'Showroom 01'
                          },
                          { value: 'Showroom 02', label: 'Showroom 02' },
                          { value: 'Showroom 03', label: 'Showroom 03' }
                        ].map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*  Date */}
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='flex flex-col gap-2'>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto size-4 text-[#5A6272]' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-full p-0' align='start'>
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Party Name */}
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party name</FormLabel>
                  <FormControl>
                    <Input placeholder='Party name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Father Name  */}
            <FormField
              control={form.control}
              name='father_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Father Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Person  */}
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

            {/* Mobile  */}
            <FormField
              control={form.control}
              name='mobile'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile</FormLabel>
                  <FormControl>
                    <Input placeholder='Mobile' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* NID Card  */}
            <FormField
              control={form.control}
              name='nid_card'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NID Card</FormLabel>
                  <FormControl>
                    <Input placeholder='NID Card' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Zone */}
            <FormField
              control={form.control}
              name='zone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zone</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Zone' />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          { value: 'Mymensingh', label: 'Mymensingh' },
                          { value: 'Trishal', label: 'Trishal' },
                          { value: 'Muktagacha', label: 'Muktagacha' },
                          { value: 'Gatail', label: 'Gatail' },
                          { value: 'Modupur', label: 'Modupur' }
                        ].map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Client Type */}
            <FormField
              control={form.control}
              name='client_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Client Type' />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          { value: 'Client', label: 'Client' },
                          { value: 'Hire', label: 'Hire' }
                        ].map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*  Address  */}
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem className='md:col-span-2'>
                  <FormLabel> Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Address' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Initial Balance  */}
            <FormField
              control={form.control}
              name='initial_balance'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initial Balance</FormLabel>
                  <div className='grid grid-cols-[1fr_120px] gap-3'>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='BDT'
                        defaultValue={0}
                        {...field}
                      />
                    </FormControl>
                    <FormField
                      control={form.control}
                      name='balance_type'
                      render={({ field }) => (
                        <>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder='Select Type' />
                            </SelectTrigger>
                            <SelectContent>
                              {[
                                { value: 'Client', label: 'Client' },
                                { value: 'Hire', label: 'Hire' }
                              ].map(({ value, label }) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </>
                      )}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Credit Limit  */}
            <FormField
              control={form.control}
              name='credit_limit'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Credit Limit</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder='BDT' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cheque No  */}
            <FormField
              control={form.control}
              name='cheque_no'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cheque No</FormLabel>
                  <FormControl>
                    <Input placeholder='Cheque No' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cheque Type  */}
            <FormField
              control={form.control}
              name='cheque_type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cheque Type</FormLabel>
                  <FormControl>
                    <Input placeholder='Cheque Type' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bank Name  */}
            <FormField
              control={form.control}
              name='bank_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Bank Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bank Branch  */}
            <FormField
              control={form.control}
              name='bank_branch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Branch</FormLabel>
                  <FormControl>
                    <Input placeholder='Bank Branch' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cheque  */}
            <FormField
              control={form.control}
              name='cheque'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cheque</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Document  */}
            <FormField
              control={form.control}
              name='document'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Document</FormLabel>
                  <FormControl>
                    <Input type='file' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='rounded bg-muted p-2 text-base font-medium md:col-span-2'>
              Guarantor Information
            </div>

            {/* Guarantor Name  */}
            <FormField
              control={form.control}
              name='guarantor_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Guarantor Father's Name  */}
            <FormField
              control={form.control}
              name='guarantor_father_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father{"'"}s Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Father's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Guarantor Mobile  */}
            <FormField
              control={form.control}
              name='guarantor_mobile'
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

            {/* Client Status *  */}
            <FormField
              control={form.control}
              name='client_status'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select Client Type' />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          { value: 'Active', label: 'Active' },
                          { value: 'Deactive', label: 'Deactive' }
                        ].map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Guarantor Address  */}
            <FormField
              control={form.control}
              name='guarantor_address'
              render={({ field }) => (
                <FormItem className='md:col-span-2'>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder='Write..' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='text-right'>
            <Button type='submit' className='bg-brand'>
              Save
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default CreatePartyForm

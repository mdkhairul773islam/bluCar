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
import { CalendarIcon, Upload } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'

const formSchema = z.object({
  image: z.string(),
  full_name: z.string({
    message: 'Full Name is required'
  }),
  mobile: z.string(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  confirm_password: z.string(),
  showroom: z.string(),
  privilege: z.string()
})

const CreateEmployeeForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
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
          <div className='grid items-start gap-5 md:grid-cols-[300px_1fr]'>
            <div className='grid gap-1 '>
              <div className='relative aspect-[4/4] overflow-hidden rounded-md'>
                <Image
                  src='/images/profile.png'
                  className='size-full'
                  alt='Profile Image'
                  fill
                />
              </div>

              <Label className='flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-brand p-3 text-primary-foreground'>
                <Upload className='size-4' />
                Upload
              </Label>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {/* Full Name */}
              <div className='sm:col-span-2'>
                <FormField
                  control={form.control}
                  name='full_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex flex-col'>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Full Name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Username */}
              <div className='sm:col-span-2'>
                <FormField
                  control={form.control}
                  name='mobile'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex flex-col'>Username</FormLabel>
                      <FormControl>
                        <Input placeholder='Username' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Mobile Phone */}
              <FormField
                control={form.control}
                name='mobile'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex flex-col'>
                      Mobile Phone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='01*********' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name='mobile'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex flex-col'>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='example@gmail.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex flex-col'>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name='confirm_password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex flex-col'>
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Confirm Password'
                        {...field}
                      />
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
                  <FormItem className='flex flex-col'>
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

              {/* Privilege */}
              <FormField
                control={form.control}
                name='privilege'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>Privilege</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Privilege' />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            {
                              value: 'Super Admin',
                              label: 'Super Admin'
                            },
                            { value: 'Admin', label: 'Admin' },
                            { value: 'User', label: 'User' }
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
            </div>
          </div>

          <div className='text-right'>
            <Button type='submit' className='bg-brand'>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default CreateEmployeeForm

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

const FormSchema = z.object({
  name: z.string(),
  manager: z.string(),
  mobile: z.string(),
  mobile_two: z.string(),
  mobile_three: z.string(),
  address: z.string(),
  prefix: z.string()
})

const AddShowroomForm = () => {
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
          {/* Name */}
          <FormField
            control={form.control}
            name='name'
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

          {/* Manager */}
          <FormField
            control={form.control}
            name='manager'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manager</FormLabel>
                <FormControl>
                  <Input placeholder='Manager' {...field} />
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

          {/* Mobile Two */}
          <FormField
            control={form.control}
            name='mobile_two'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Two</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='01*********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mobile Three */}
          <FormField
            control={form.control}
            name='mobile_three'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Three</FormLabel>
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
                  <Input placeholder='Address' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Prefix */}
          <FormField
            control={form.control}
            name='prefix'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prefix</FormLabel>
                <FormControl>
                  <Input placeholder='Preix' {...field} />
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

export default AddShowroomForm

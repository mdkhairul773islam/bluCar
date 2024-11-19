'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
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

const FormSchema = z.object({
  privilege: z.string({
    required_error: 'Please select a Privilege'
  }),
  username: z.string({
    required_error: 'Please select a Username'
  })
})

const UserSearchForm = () => {
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
        <div className='grid gap-2  sm:grid-cols-2 md:gap-4 lg:grid-cols-3'>
          {/* Privilege */}
          <FormField
            control={form.control}
            name='privilege'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Privilege</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a Privilege' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'User',
                        value: 'User'
                      },
                      {
                        label: 'Admin',
                        value: 'Admin'
                      },
                      {
                        label: 'Super Admin',
                        value: 'Super Admin'
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

          {/* Username */}
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a Username' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      {
                        label: 'John Smith',
                        value: 'John Smith'
                      },
                      {
                        label: 'Adom Hilari',
                        value: 'Adom Hilari'
                      },
                      {
                        label: 'Moskovlev',
                        value: 'Moskovlev'
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
        </div>
      </form>
    </Form>
  )
}

export default UserSearchForm

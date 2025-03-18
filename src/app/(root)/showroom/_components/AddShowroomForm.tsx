'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import showroomService from '@/services/showroom-service'
import toastify from '@/lib/toastify'
import showroomSchema from './showroomSchema'

const AddShowroomForm = ({ setOpen }: { setOpen: any }) => {
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof showroomSchema>>({
    resolver: zodResolver(showroomSchema)
  })

  const mutation = useMutation({
    mutationFn: showroomService.addShowroom,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['showrooms'])
      toastify.success('Showroom added successfully')
      setOpen(false)
    },
    onError: (error: any) => {
      toastify.error(error.message)
    }
  })

  function onSubmit(data: z.infer<typeof showroomSchema>) {
    mutation.mutate(data)
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

          {/* Location */}
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder='Location' {...field} />
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

export default AddShowroomForm

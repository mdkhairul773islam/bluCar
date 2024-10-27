'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { z } from 'zod'
import React from 'react'
import { Showroom } from './columns'
import toastify from '@/lib/toastify'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import showroomSchema from './showroomSchema'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import showroomService from '@/services/showroom-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const EditShowroomForm = ({
  setOpen,
  showroom
}: {
  setOpen: any
  showroom: Showroom
}) => {
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof showroomSchema>>({
    resolver: zodResolver(showroomSchema),
    defaultValues: {
      name: showroom?.name || '',
      location: showroom?.location || '',
      manager: showroom?.manager || '',
      mobile: showroom?.mobile || '',
      mobile_two: showroom?.mobile_two || '',
      address: showroom?.address || ''
    }
  })

  const mutation = useMutation({
    mutationFn: data => showroomService.updateShowroom(showroom.id, data),
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['showrooms'])
      toastify.success('Showroom updated successfully')
      setOpen(false)
    },
    onError: error => {
      toastify.error('Failed to update showroom')
    }
  })

  function onSubmit(data: z.infer<typeof showroomSchema>) {
    // @ts-ignore
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
            {mutation.isPending ? 'Submitting...' : 'Update'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default EditShowroomForm

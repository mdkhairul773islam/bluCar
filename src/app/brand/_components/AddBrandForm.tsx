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
import toastify from '@/lib/toastify'
import brandSchema from './brandSchema'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import brandService from '@/services/brand-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const AddBrandForm = ({ setOpen }: { setOpen: any }) => {
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema)
  })

  const mutation = useMutation({
    mutationFn: brandService.addBrand,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['brands'])
      toastify.success('Brand added successfully')
      setOpen(false)
    },
    onError: error => {
      toastify.error('Failed to add brand')
    }
  })

  function onSubmit(data: z.infer<typeof brandSchema>) {
    mutation.mutate(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-4 py-4'>
          {/* Brand name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand name</FormLabel>
                <FormControl>
                  <Input placeholder='Brand name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Description' {...field} />
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

export default AddBrandForm

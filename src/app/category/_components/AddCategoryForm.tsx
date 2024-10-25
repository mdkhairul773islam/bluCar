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
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import categorySchema from './categorySchema'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import categoryService from '@/services/category-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const AddCategoryForm = ({ setOpen }: { setOpen: any }) => {
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema)
  })

  const mutation = useMutation({
    mutationFn: categoryService.addCategory,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['categories'])
      toastify.success('Category added successfully')
      setOpen(false)
    },
    onError: error => {
      toastify.error('Failed to add category')
    }
  })

  function onSubmit(data: z.infer<typeof categorySchema>) {
    mutation.mutate(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid gap-4 py-4'>
          {/* Category name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category name</FormLabel>
                <FormControl>
                  <Input placeholder='Category name' {...field} />
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

export default AddCategoryForm

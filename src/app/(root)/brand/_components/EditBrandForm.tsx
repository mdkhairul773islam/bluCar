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
import { Brand } from './columns'
import toastify from '@/lib/toastify'
import brandSchema from './brandSchema'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import brandService from '@/services/brand-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const EditBrandForm = ({ setOpen, brand }: { setOpen: any; brand: Brand }) => {
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      name: brand?.name || '',
      description: brand?.description || ''
    }
  })

  const mutation = useMutation({
    mutationFn: data => brandService.updateBrand(brand.id, data),
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['brands'])
      toastify.success('Brand updated successfully')
      setOpen(false)
    },
    onError: error => {
      toastify.error('Failed to update brand')
    }
  })

  function onSubmit(data: z.infer<typeof brandSchema>) {
    // @ts-ignore
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
            {mutation.isPending ? 'Submitting...' : 'Update'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default EditBrandForm

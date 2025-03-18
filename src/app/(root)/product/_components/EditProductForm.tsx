'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { z } from 'zod'
import { Product } from './columns'
import toastify from '@/lib/toastify'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { productSchema } from './productSchema'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import productService from '@/services/product-service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import categoryService from '@/services/category-service'
import brandService from '@/services/brand-service'

const EditProductForm = ({
  setOpen,
  product
}: {
  setOpen: any
  product: Product
}) => {
  const queryClient = useQueryClient()

  const {
    data: brands,
    isLoading: brandLoading,
    error: brandError
  } = useQuery({
    queryKey: ['brands'],
    queryFn: brandService.getAllBrands
  })

  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError
  } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryService.getAllCategories
  })

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name,
      model: product?.model || '',
      category_id: product?.category_id,
      brand_id: product?.brand_id,
      purchase_price: product?.purchase_price,
      sale_price: product?.sale_price,
      low_level: product?.low_level || undefined
    }
  })

  console.log(typeof product?.category_id)

  const mutation = useMutation({
    mutationFn: data => productService.updateProduct(product.id, data),
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['products'])
      toastify.success('Product updated successfully')
      setOpen(false)
    },
    onError: error => {
      toastify.error('Failed to update showroom')
    }
  })

  function onSubmit(data: z.infer<typeof productSchema>) {
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
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder='Product Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Model */}
          <FormField
            control={form.control}
            name='model'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Input placeholder='Model' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name='category_id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  value={String(field.value)}
                  onValueChange={value => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories?.map((category: any) => (
                      <SelectItem
                        key={category?.id}
                        value={String(category?.id)}
                      >
                        {category?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Brand */}
          <FormField
            control={form.control}
            name='brand_id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <Select
                  value={String(field.value)}
                  onValueChange={value => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Brand' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {brands?.map((brand: any) => (
                      <SelectItem key={brand?.id} value={String(brand?.id)}>
                        {brand?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Purchase Price */}
          <FormField
            control={form.control}
            name='purchase_price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchase Price</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='BDT'
                    {...field}
                    onChange={event => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sale Price */}
          <FormField
            control={form.control}
            name='sale_price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sale Price</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='BDT'
                    {...field}
                    onChange={event => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Low Level */}
          <FormField
            control={form.control}
            name='low_level'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Low Level</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
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

export default EditProductForm

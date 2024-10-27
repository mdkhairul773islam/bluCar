'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const FormSchema = z.object({
  showroom: z.string({
    required_error: 'Please select an showroom '
  }),
  type: z.enum(['Supplier', 'Client'])
})

const SearchSMSForm = () => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex items-center gap-2 bg-brand'>
          <Search className='size-4' />
          Search
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Search SMS</DialogTitle>
          <DialogDescription>
            Add information here. Click search.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
              {/* Showroom */}
              <FormField
                control={form.control}
                name='showroom'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Showroom</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select showroom' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          {
                            label: 'showroom one',
                            value: 'showroom one'
                          },
                          {
                            label: 'showroom two',
                            value: 'showroom two'
                          },
                          {
                            label: 'showroom three',
                            value: 'showroom three'
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

              {/* Type */}
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a Type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          {
                            label: 'Supplier',
                            value: 'Supplier'
                          },
                          {
                            label: 'Client',
                            value: 'Client'
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

              <div>
                <Button
                  type='submit'
                  className='flex items-center gap-2 bg-brand'
                >
                  <Search className='size-4' />
                  Search
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default SearchSMSForm

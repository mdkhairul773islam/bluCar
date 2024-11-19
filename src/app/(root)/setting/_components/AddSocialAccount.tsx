'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
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
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FormSchema = z.object({
  facebook: z.string(),
  twitter: z.string(),
  pinterest: z.string(),
  youtube: z.string(),
  linkedin: z.string()
})

const AddSocialAccount = () => {
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
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid gap-4 py-4'>
              {/* Facebook */}
              <FormField
                control={form.control}
                name='facebook'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://www.facebook.com/'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Twitter */}
              <FormField
                control={form.control}
                name='twitter'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://www.twitter.com/'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* pinterest */}
              <FormField
                control={form.control}
                name='pinterest'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pinterest</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://www.pinterest.com/'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* linkedin */}
              <FormField
                control={form.control}
                name='linkedin'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://www.linkedin.com/'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* youtube */}
              <FormField
                control={form.control}
                name='youtube'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Youtube</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://www.youtube.com/'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button type='submit' className='bg-brand'>
                  Save
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default AddSocialAccount

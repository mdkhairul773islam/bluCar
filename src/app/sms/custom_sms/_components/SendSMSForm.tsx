import React from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const SendSMSForm = () => {
  return (
    <form className='mt-8 flex  flex-col gap-5'>
      <div className='flex flex-col gap-3'>
        <Label>Mobile Number</Label>
        <Textarea
          className='min-h-28'
          placeholder='Without +88 And Use Comma(,) Separator'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Label>Message</Label>
        <Textarea className='min-h-32' placeholder='Write your message..' />
      </div>
      <div className='flex justify-end gap-2'>
        <Button className='bg-brand' type='submit'>
          Send SMS
        </Button>
      </div>
    </form>
  )
}

export default SendSMSForm

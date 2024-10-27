import React from 'react'
import { SMS, columns } from './columns'
import { Label } from '@/components/ui/label'
import { BasicTable } from '@/components/shared/BasicTable'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const SendSMSForm = ({ data }: { data: SMS[] }) => {
  return (
    <form className='mt-8 flex  flex-col gap-5'>
      <div className='flex flex-col gap-3'>
        <Label>Mobile Number</Label>
        <div className='rounded border p-1'>
          <ScrollArea className='h-40'>
            <BasicTable data={data} columns={columns} />
            <ScrollBar orientation='vertical' />
          </ScrollArea>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <Label>Message</Label>
        <Textarea className='min-h-40' placeholder='Write your message..' />
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

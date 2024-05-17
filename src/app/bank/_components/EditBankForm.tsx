import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const EditBankForm = () => {
  return (
    <form action=''>
      <div className='grid gap-6 py-4'>
        <div className='grid gap-2'>
          <Label htmlFor='name'>Bank Name</Label>
          <Input id='name' placeholder='Name' />
        </div>

        <Button type='submit' className='bg-brand'>
          Save changes
        </Button>
      </div>
    </form>
  )
}

export default EditBankForm

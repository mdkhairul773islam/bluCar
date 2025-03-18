'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useState } from 'react';
import { Brand } from './columns'
import { Edit } from 'lucide-react'
import EditBrandForm from './EditBrandForm'
import { Button } from '@/components/ui/button'

export default function EditBrand({ brand }: { brand: Brand }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size='icon'
          className='edit-button'
          onClick={() => setOpen(true)}
        >
          <Edit className='size-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit Brand</DialogTitle>
          <DialogDescription>
            Changes information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Edit Brand form */}
        <EditBrandForm brand={brand} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

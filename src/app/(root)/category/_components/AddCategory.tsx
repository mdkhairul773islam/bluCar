'use client'

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { CirclePlus } from 'lucide-react'
import AddCategoryForm from './AddCategoryForm'
import { Button } from '@/components/ui/button'

export default function AddCategory() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className='flex items-center gap-2 bg-brand'
          onClick={() => setOpen(true)}
        >
          <CirclePlus className='size-4' />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Brand</DialogTitle>
          <DialogDescription>
            Add information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Add Brand form */}
        <AddCategoryForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

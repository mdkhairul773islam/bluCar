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
import { Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EditCategoryForm from './EditCategoryForm'
import { Category } from './columns'

export default function EditCategory({ category }: { category: Category }) {
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
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Changes information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Add Category form */}
        <EditCategoryForm category={category} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { useState } from 'react';
import { Edit } from 'lucide-react'
import { Product } from './columns'
import EditProductForm from './EditProductForm'
import { Button } from '@/components/ui/button'

export default function EditProduct({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Product</SheetTitle>
          <SheetDescription>
            Changes information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit Product form */}
        <EditProductForm product={product} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}

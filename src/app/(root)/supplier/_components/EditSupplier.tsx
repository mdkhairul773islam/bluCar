'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { useState } from 'react'
import { Edit } from 'lucide-react'
import { Supplier } from './columns'
import { Button } from '@/components/ui/button'
import EditSupplierForm from './EditSupplierForm'

export default function EditSupplier({ supplier }: { supplier: Supplier }) {
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
          <SheetTitle>Edit Supplier</SheetTitle>
          <SheetDescription>
            Update information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit Supplier form */}
        <EditSupplierForm supplier={supplier} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}

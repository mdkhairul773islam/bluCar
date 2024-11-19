'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import AddShowroomForm from './AddShowroomForm'
import { CirclePlus } from 'lucide-react'
import { useState } from 'react'

export default function AddShowroom() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className='flex items-center gap-2 bg-brand'
        >
          <CirclePlus className='size-4' />
          Add New
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Showroom</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add Showroom form */}
        <AddShowroomForm setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}

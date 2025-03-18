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
import { Showroom } from './columns'
import { Button } from '@/components/ui/button'
import EditShowroomForm from './EditShowroomForm'

export default function EditShowroom({ showroom }: { showroom: Showroom }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size='icon'
          className='edit-button'
          onClick={() => setOpen(true)}
        >
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Showroom</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit showroom form */}
        <EditShowroomForm showroom={showroom} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  )
}

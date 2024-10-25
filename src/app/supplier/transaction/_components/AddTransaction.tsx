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
import { CirclePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Supplier } from '../../_components/columns'
import AddTransactionForm from './AddTransactionForm'
import { Showroom } from '@/app/showroom/_components/columns'

export default function AddTransaction({
  suppliers,
  showrooms
}: {
  suppliers: Supplier[]
  showrooms: Showroom[]
}) {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className='flex items-center gap-2 bg-brand'>
          <CirclePlus className='size-4' />
          Add New
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Transaction</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add Transaction form */}
        <AddTransactionForm
          setOpen={setOpen}
          showrooms={showrooms}
          suppliers={suppliers}
        />
      </SheetContent>
    </Sheet>
  )
}

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import AddCostForm from './AddCostForm'
import { CirclePlus } from 'lucide-react'

export default function AddCost() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='flex items-center gap-2 bg-brand'>
          <CirclePlus className='size-4' />
          Add New
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Cost</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add Cost form */}
        <AddCostForm />
      </SheetContent>
    </Sheet>
  )
}

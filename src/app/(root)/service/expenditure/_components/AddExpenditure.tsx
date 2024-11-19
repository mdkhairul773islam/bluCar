import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import AddExpenditureForm from './AddExpenditureForm'
import { CirclePlus } from 'lucide-react'

export default function AddExpenditure() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='flex items-center gap-2 bg-brand'>
          <CirclePlus className='size-4' />
          Add Expenditure
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Expenditure</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add Expenditure form */}
        <AddExpenditureForm />
      </SheetContent>
    </Sheet>
  )
}

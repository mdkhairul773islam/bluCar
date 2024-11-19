import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import AddMdTransactionForm from './AddMdTransactionForm'
import { CirclePlus } from 'lucide-react'

export default function AddMdTransaction() {
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
          <SheetTitle>Add Md Transaction</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add MdTransaction form */}
        <AddMdTransactionForm />
      </SheetContent>
    </Sheet>
  )
}

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Edit } from 'lucide-react'
import EditTransactionForm from './EditTransactionForm'

export default function EditTransaction() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Transaction</SheetTitle>
          <SheetDescription>
            Update information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit Transaction form */}
        <EditTransactionForm />
      </SheetContent>
    </Sheet>
  )
}

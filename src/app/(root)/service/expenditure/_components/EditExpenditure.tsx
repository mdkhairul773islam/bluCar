import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import EditExpenditureForm from './EditExpenditureForm'
import { Edit } from 'lucide-react'

export default function EditExpenditure() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Expenditure</SheetTitle>
          <SheetDescription>
            Changes information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit Expenditure form */}
        <EditExpenditureForm />
      </SheetContent>
    </Sheet>
  )
}

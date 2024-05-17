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
import EditShowroomForm from './EditShowroomForm'

export default function EditShowroom() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
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
        <EditShowroomForm />
      </SheetContent>
    </Sheet>
  )
}

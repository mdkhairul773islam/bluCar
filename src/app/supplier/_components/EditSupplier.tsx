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
import EditSupplierForm from './EditSupplierForm'

export default function EditSupplier() {
  return (
    <Sheet>
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
        <EditSupplierForm />
      </SheetContent>
    </Sheet>
  )
}

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import EditDamageForm from './EditDamageForm'
import { Edit } from 'lucide-react'

export default function EditDamage() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Damage Product</SheetTitle>
          <SheetDescription>
            Changes information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add Damage form */}
        <EditDamageForm />
      </SheetContent>
    </Sheet>
  )
}

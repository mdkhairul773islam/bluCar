import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import EditOrderForm from './EditOrderForm'
import { Edit } from 'lucide-react'

export default function EditOrder() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Order</SheetTitle>
          <SheetDescription>
            Changes information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit Order form */}
        <EditOrderForm />
      </SheetContent>
    </Sheet>
  )
}

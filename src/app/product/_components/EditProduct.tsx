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
import EditProductForm from './EditProductForm'

export default function EditProduct() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Product</SheetTitle>
          <SheetDescription>
            Changes information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit Product form */}
        <EditProductForm />
      </SheetContent>
    </Sheet>
  )
}

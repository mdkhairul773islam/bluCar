import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import AddFixedAssetForm from './AddFixedAssetForm'
import { CirclePlus } from 'lucide-react'

export default function AddFixedAsset() {
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
          <SheetTitle>Add Fixed Asset</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Add FixedAsset form */}
        <AddFixedAssetForm />
      </SheetContent>
    </Sheet>
  )
}

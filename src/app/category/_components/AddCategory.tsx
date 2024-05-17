import { Button } from '@/components/ui/button'
import AddCategoryForm from './AddCategoryForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { CirclePlus } from 'lucide-react'

export default function AddCategory() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className='flex items-center gap-2 bg-brand'>
          <CirclePlus className='size-4' />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Add information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Add Category form */}
        <AddCategoryForm />
      </DialogContent>
    </Dialog>
  )
}

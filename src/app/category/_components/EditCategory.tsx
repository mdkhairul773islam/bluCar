import { Button } from '@/components/ui/button'
import EditCategoryForm from './EditCategoryForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Edit } from 'lucide-react'

export default function EditCategory() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Changes information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Add Category form */}
        <EditCategoryForm />
      </DialogContent>
    </Dialog>
  )
}

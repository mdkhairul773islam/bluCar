import AddFieldForm from './AddFieldForm'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { CirclePlus } from 'lucide-react'

export default function AddField() {
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
          <DialogTitle>Add Field</DialogTitle>
          <DialogDescription>
            Add information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Add Field form */}
        <AddFieldForm />
      </DialogContent>
    </Dialog>
  )
}

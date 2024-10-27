import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Edit } from 'lucide-react'
import EditZoneForm from './EditZoneForm'
import { Button } from '@/components/ui/button'

export default function EditZone() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='icon' className='edit-button'>
          <Edit className='size-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit Zone</DialogTitle>
          <DialogDescription>
            Add information here. Click save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Edit Zone form */}
        <EditZoneForm />
      </DialogContent>
    </Dialog>
  )
}

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogAction,
  AlertDialogDescription
} from '@/components/ui/alert-dialog'
import toastify from '@/lib/toastify'
import { Trash } from 'lucide-react'
import { useState } from 'react';
import { Button } from '@/components/ui/button'
import supplierService from '@/services/supplier-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const DeleteSupplier = ({ id }: { id: number }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const queryClient = useQueryClient()

  // Delete mutation
  const mutation = useMutation({
    mutationFn: supplierService.deleteSupplier,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['suppliers'])
      toastify.success('Supplier deleted successfully')
      setIsDialogOpen(false)
    },
    onError: error => {
      toastify.error('Failed to delete supplier')
      console.error('Error deleting supplier:', error)
    }
  })

  // handle Delete function
  const handleDelete = () => {
    mutation.mutate(id)
  }

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button
          size='icon'
          className='delete-button'
          onClick={() => setIsDialogOpen(true)}
        >
          <Trash className='size-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure delete this supplier?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and
            remove your data from database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
          <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteSupplier

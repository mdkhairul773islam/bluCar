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
import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import brandService from '@/services/brand-service'
import toastify from '@/lib/toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const DeleteBrand = ({ id }: { id: number }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const queryClient = useQueryClient()

  // Delete mutation
  const mutation = useMutation({
    mutationFn: brandService.deleteBrand,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['brands'])
      toastify.success('Brand deleted successfully')
      setIsDialogOpen(false)
    },
    onError: error => {
      toastify.error('Failed to delete brand')
      console.error('Error deleting brand:', error)
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
          <AlertDialogTitle>Are you sure delete this brand?</AlertDialogTitle>
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

export default DeleteBrand

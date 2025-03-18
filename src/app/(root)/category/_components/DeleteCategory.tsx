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
import categoryService from '@/services/category-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const DeleteCategory = ({ id }: { id: number }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const queryClient = useQueryClient()

  // Delete mutation
  const mutation = useMutation({
    mutationFn: categoryService.deleteCategory,
    onSuccess: () => {
      // @ts-ignore
      queryClient.invalidateQueries(['categories'])
      toastify.success('Category deleted successfully')
      setIsDialogOpen(false)
    },
    onError: error => {
      toastify.error('Failed to delete category')
      console.error('Error deleting category:', error)
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
            Are you sure delete this category?
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

export default DeleteCategory

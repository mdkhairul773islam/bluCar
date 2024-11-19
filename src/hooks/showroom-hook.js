import showroomService from '@/services/showroom-service'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

const useAllShowrooms = () => {
  return useQuery(['showrooms'], showroomService.getAllShowrooms())
}

const useShowroomById = showroomId => {
  return useQuery(['showrooms'], showroomService.getByShowroomId(showroomId))
}

const useCreateShowroom = newShowroom => {
  const queryClient = useQueryClient()
  return useMutation(
    () => {
      return showroomService.addShowroom(newShowroom)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('showrooms')
      }
    }
  )
}

// const useUpdatePost = () => {
//   const queryClient = useQueryClient()
//   return useMutation(
//     () => {
//       return exampleService.updatePost()
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries('showrooms')
//       }
//     }
//   )
// }

const useDeleteShowroom = showroomId => {
  const queryClient = useQueryClient()
  return useMutation(
    () => {
      return showroomService.deleteShowroom(showroomId)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('showrooms')
      }
    }
  )
}

export {
  useAllShowrooms,
  useShowroomById,
  useCreateShowroom,
  useDeleteShowroom
}

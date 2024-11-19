import brandService from '@/services/brand-service'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

const useAllBrands = () => {
  return useQuery(['brands'], brandService.getAllBrands())
}

const useBrandById = brandId => {
  return useQuery(['brands'], brandService.getByBrandId(brandId))
}

const useCreateBrand = newBrand => {
  const queryClient = useQueryClient()
  return useMutation(
    () => {
      return brandService.addBrand(newBrand)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('brands')
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
//         queryClient.invalidateQueries('brands')
//       }
//     }
//   )
// }

const useDeleteBrand = brandId => {
  const queryClient = useQueryClient()
  return useMutation(
    () => {
      return brandService.deleteBrand(brandId)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('brands')
      }
    }
  )
}

export { useAllBrands, useBrandById, useCreateBrand, useDeleteBrand }

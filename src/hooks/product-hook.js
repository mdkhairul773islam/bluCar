import productService from '@/services/product-service'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

const useAllProducts = () => {
  return useQuery(['products'], productService.getAllProducts())
}

const useProductById = productId => {
  return useQuery(['products'], productService.getByProductId(productId))
}

const useCreateProduct = newProduct => {
  const queryClient = useQueryClient()
  return useMutation(
    () => {
      return productService.addProduct(newProduct)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products')
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
//         queryClient.invalidateQueries('products')
//       }
//     }
//   )
// }

const useDeleteProduct = productId => {
  const queryClient = useQueryClient()
  return useMutation(
    () => {
      return productService.deleteProduct(productId)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products')
      }
    }
  )
}

export { useAllProducts, useProductById, useCreateProduct, useDeleteProduct }

'use client'

import { columns } from './columns'
import { useQuery } from '@tanstack/react-query'
import categoryService from '@/services/category-service'
import { DataTable } from '@/components/shared/DataTable'
import LoadingTable from '@/components/shared/LoadingTable'
import FetchingError from '@/components/shared/FetchingError'

const CategoryTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryService.getAllCategories
  })

  // Loading Rendering
  if (isLoading) return <LoadingTable />

  // Error rendering
  if (error) return <FetchingError message={error.message} />

  // Success rendering
  //   @ts-ignore
  if (data) return <DataTable data={data} columns={columns} />
}

export default CategoryTable

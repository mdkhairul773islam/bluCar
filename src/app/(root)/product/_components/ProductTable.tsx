'use client'

import React from 'react'
import { columns } from './columns'
import { useQuery } from '@tanstack/react-query'
import productService from '@/services/product-service'
import { DataTable } from '@/components/shared/DataTable'
import LoadingTable from '@/components/shared/LoadingTable'
import FetchingError from '@/components/shared/FetchingError'

const ProductTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getAllProducts
  })

  // Loading Rendering
  if (isLoading) return <LoadingTable />

  // Error rendering
  if (error) return <FetchingError message={error.message} />

  // Success rendering
  //   @ts-ignore
  if (data) return <DataTable data={data} columns={columns} />
}

export default ProductTable

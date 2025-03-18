'use client'

import { columns } from './columns'
import { useQuery } from '@tanstack/react-query'
import transactionService from '@/services/transaction-service'
import { DataTable } from '@/components/shared/DataTable'
import LoadingTable from '@/components/shared/LoadingTable'
import FetchingError from '@/components/shared/FetchingError'

const TransactionTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['transactions'],
    queryFn: transactionService.getAllTransactions
  })

  // Loading Rendering
  if (isLoading) return <LoadingTable />

  // Error rendering
  if (error) return <FetchingError message={error.message} />

  // Success rendering
  //   @ts-ignore
  if (data) return <DataTable data={data} columns={columns} />
}

export default TransactionTable

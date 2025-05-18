// @ts-nocheck
'use client'

import dynamic from 'next/dynamic'

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
)

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import dateFormat from '@/lib/dateFormat'
import { Badge } from '@/components/ui/badge'
import { useQuery } from '@tanstack/react-query'
import { Transaction } from '../../../_components/columns'
import transactionService from '@/services/transaction-service'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'
import PDFView from './pdf-view'

const TransactionDetail = ({ transactionId }: { transactionId: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['transaction', transactionId],
    queryFn: () => transactionService.getByTransactionId(transactionId)
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const transaction = data?.data
  return (
    <>
      {/* Panel Header */}
      <PanelHeader title='Transaction Details'>
        <PDFDownloadLink document={<PDFView />} fileName='voucer.pdf'>
          {({ blob, url, loading, error }) => (
            <Button className='gap-2 bg-brand'>
              <Printer className='size-4' />

              {loading ? 'Loading..' : 'Print'}
            </Button>
          )}
        </PDFDownloadLink>
      </PanelHeader>

      <div className='grid gap-8'>
        <div className='flex flex-col items-start md:flex-row md:justify-between'>
          <ul className='space-y-2 md:max-w-80'>
            <li>
              <strong>Voucher No : </strong>
              {transaction?.relation}
            </li>
            <li>
              <strong>Party Name:</strong> {transaction?.party?.name}
            </li>
            <li>
              <strong>Party ID:</strong> {transaction?.party?.code}
            </li>
          </ul>
          <ul className='w-full space-y-2 md:max-w-80'>
            <li>
              <strong>Date :</strong> {transaction?.transaction_at}
            </li>
            <li>
              <strong>Create Time : </strong> 10:14:45 pm
            </li>
          </ul>
        </div>
        <Table>
          <TableHeader>
            <TableRow className='bg-brand hover:bg-brand'>
              <TableHead className='border text-white'>Paid By</TableHead>
              <TableHead className='border text-white'>
                Transaction Type
              </TableHead>
              <TableHead className='border text-white'>Paid</TableHead>
              <TableHead className='border text-white'>Remission</TableHead>
              <TableHead className='border text-white'>
                Previous Balance (Tk)
              </TableHead>
              <TableHead className='border text-white'>Total Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='border'>DBBL </TableCell>
              <TableCell className='border'>Cash</TableCell>
              <TableCell className='border'>9900.00</TableCell>
              <TableCell className='border'>0.00</TableCell>
              <TableCell className='border'>10000.04</TableCell>
              <TableCell className='border'>100.04 [ Payable ]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='border' colSpan={6}>
                In Word : Nine Thousand Nine Hundred Taka Only.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default TransactionDetail

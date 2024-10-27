'use client'

import { useQuery } from '@tanstack/react-query'
import supplierService from '@/services/supplier-service'
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
import { Supplier } from '../../../_components/columns'

const SupplierDetail = ({ supplierId }: { supplierId: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['supplier', supplierId],
    queryFn: () => supplierService.getBySupplierId(supplierId)
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const supplier: Supplier = data?.data
  return (
    <div>
      <div className='overflow-x-auto'>
        <Table className=' '>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={4}
                className='border bg-brand text-center text-white'
              >
                Supplier Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                ID
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.id}
              </TableCell>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Code
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.code}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Showroom ID
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.showroom_id}
              </TableCell>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Date
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {dateFormat(supplier?.date)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Name
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.name}
              </TableCell>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Contact person
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.contact_person}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Mobile
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.mobile}
              </TableCell>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Address
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.address}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Initial Balance
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.initial_balance}
              </TableCell>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Status
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {supplier?.status === 'Receivable' ? (
                  <Badge className='rounded-full bg-green-600'>
                    Receivable
                  </Badge>
                ) : (
                  <Badge className='rounded-full bg-red-600'>Payable</Badge>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='w-48 border bg-gray-50 px-5 py-4 font-bold'>
                Last Updated Date
              </TableCell>
              <TableCell className='border px-10 py-4'>
                {dateFormat(supplier?.updated_at)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default SupplierDetail

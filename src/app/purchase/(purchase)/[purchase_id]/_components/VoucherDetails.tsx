import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import React from 'react'

const VoucherDetails = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='grid gap-2'>
          <div className='grid grid-cols-[120px_1fr]'>
            <span>Supplier Name : </span>
            <span>KAWSER MOTORS</span>
          </div>

          <div className='grid grid-cols-[120px_1fr]'>
            <span>Address : </span>
            <span>
              Mymensingh HAMIDUL HAQE DBBL7017511639879 M/S VAI VAI STORE AGRONI
              BANK 02000-10059994
            </span>
          </div>

          <div className='grid grid-cols-[120px_1fr]'>
            <span>Mobile : </span>
            <span>01911282169</span>
          </div>
        </div>
        <div className='grid gap-2'>
          <div className='grid grid-cols-[120px_1fr]'>
            <span>Date : </span>
            <span>2024-05-08</span>
          </div>

          <div className='grid grid-cols-[120px_1fr]'>
            <span>Voucher No : </span>
            <span>240547259</span>
          </div>

          <div className='grid grid-cols-[120px_1fr]'>
            <span>Remark : </span>
            <span>N/A</span>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-10 border px-2'>SL </TableHead>
            <TableHead className='border'>Product Name </TableHead>
            <TableHead className='w-20 border px-2'>Unit</TableHead>
            <TableHead className='w-20 border px-2'>Quantity</TableHead>
            <TableHead className='w-32 border px-2'>Price (TK)</TableHead>
            <TableHead className='w-32 border px-2 text-right'>
              Total (TK)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='border px-2'>01</TableCell>
            <TableCell className='border px-2'>0472 - SINO HD-50 5L</TableCell>
            <TableCell className='border px-2'>Pcs</TableCell>
            <TableCell className='border px-2'>6.000</TableCell>
            <TableCell className='border px-2'>1260.00</TableCell>
            <TableCell className='border px-2 text-right'> 7560</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div>
        <div className='ml-auto flex max-w-96 flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <span className='font-medium'>Total Amount : </span>
            <span className='font-medium'>7,560.00</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium'>Total Discount : </span>
            <span className='font-medium'>0.00</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium'>Transport Cost : </span>
            <span className='font-medium'>0.00</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium'>Grand Total: </span>
            <span className='font-medium'>7,560.00</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium'>Paid </span>
            <span className='font-medium'>0.00</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium'>Due </span>
            <span className='font-medium'>0.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoucherDetails

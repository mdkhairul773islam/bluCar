import React from 'react'
import { Metadata } from 'next'
import { PurchaseReturn, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CirclePlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Purchase Return'
}

async function getData(): Promise<PurchaseReturn[]> {
  return [
    {
      id: '1',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    },
    {
      id: '2',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    },
    {
      id: '3',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    },
    {
      id: '4',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    },
    {
      id: '5',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    },
    {
      id: '6',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    },
    {
      id: '7',
      date: '2019-10-11						',
      username: 'bluemotors124',
      product_code: '14 Inch Teler Pipe',
      quantity: '10 Pcs',
      purchase_price: 105.0,
      return_amount: 3100.0,
      showroom: 'M/S Blue MOTORS'
    }
  ]
}

const PurchaseReturnPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='All Purchase Return'>
        <Link href='/purchase/return/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add Purchase Return
          </Button>
        </Link>
      </PanelHeader>

      {/* Purchase Return Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default PurchaseReturnPage

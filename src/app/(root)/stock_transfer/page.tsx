import React from 'react'
import { Metadata } from 'next'
import { StockTransfer, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CirclePlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stock Transfer History'
}

async function getData(): Promise<StockTransfer[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '2',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '3',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '4',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '5',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '6',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '7',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '8',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '9',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    },
    {
      id: '10',
      date: '2019-09-07	',
      voucher_no: '2202071641',
      product_name: '0068 - 600.16 MRF SAKTI LIFE TAYAR',
      category: 'Tayar',
      subcategory: 'MRF',
      quantity: '1 Liter',
      purchase_price: 5800.0,
      sell_price: 5400.0,
      purchase_amount: 5400,
      sell_amount: 5800,
      showroom_from: 'M/S BLUE MOTORS',
      showroom_to: 'ACI MOTORS',
      username: 'bluemotors123'
    }
  ]
}

const StockTransferPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='stockTransfer' />

      {/* Panel Header */}
      <PanelHeader title='Stock Transfer History'>
        <Link href='/stock_transfer/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add New
          </Button>
        </Link>
      </PanelHeader>

      {/* Stock Transfer History Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default StockTransferPage

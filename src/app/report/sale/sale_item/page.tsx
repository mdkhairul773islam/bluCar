import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Sale, columns } from './_components/columns'
import { BasicTable } from '@/components/shared/BasicTable'

export const metadata: Metadata = {
  title: 'Sale Item Report'
}

async function getData(): Promise<Sale[]> {
  return [
    {
      id: '1',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '2',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '3',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '4',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '5',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '6',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '7',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    },
    {
      id: '8',
      date: '2023-03-19',
      voucher_no: '240547374',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      quantity: 2.0,
      sale_price: 816.0,
      amount: 1632.0
    }
  ]
}

const SaleItemReportPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Sale Item Report'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Sale Item Report Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default SaleItemReportPage

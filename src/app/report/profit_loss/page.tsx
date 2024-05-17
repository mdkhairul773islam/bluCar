import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Purchase, columns } from './_components/columns'
import { BasicTable } from '@/components/shared/BasicTable'

export const metadata: Metadata = {
  title: 'Profit / Loss'
}

async function getData(): Promise<Purchase[]> {
  return [
    {
      id: '1',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '2',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '3',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '4',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '5',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '6',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '7',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    },
    {
      id: '8',
      product_name: 'FAN ASSY ORIGINAL SONALIKA (10002384) A387	',
      unit: 'Pcs',
      voucher_no: '240547374',
      quantity: 2.0,
      purchase_price: 816.0,
      sale_price: 816.0,
      discount: 1632.0,
      purchase_amount: 234234,
      sale_amount: 32425,
      profit: 324,
      loss: 0
    }
  ]
}

const ProfitLossReportPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Profit / Loss'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Profit / Loss Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default ProfitLossReportPage

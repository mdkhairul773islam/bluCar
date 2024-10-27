import React from 'react'
import { Metadata } from 'next'
import { Product, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Ledger'
}

async function getData(): Promise<Product[]> {
  return [
    {
      id: '1',
      date: '2024-05-03',
      voucher_no: '240547100',
      details: 'UDOYON KRISHI MACHINARY',
      pq: 1.0,
      sq: 0,
      prq: 0,
      st: 0,
      dp: 0,
      ep: 0,
      stock: 1
    },
    {
      id: '2',
      date: '2024-05-03',
      voucher_no: '240547100',
      details: 'UDOYON KRISHI MACHINARY',
      pq: 1.0,
      sq: 0,
      prq: 0,
      st: 0,
      dp: 0,
      ep: 0,
      stock: 1
    },
    {
      id: '3',
      date: '2024-05-03',
      voucher_no: '240547100',
      details: 'UDOYON KRISHI MACHINARY',
      pq: 1.0,
      sq: 0,
      prq: 0,
      st: 0,
      dp: 0,
      ep: 0,
      stock: 1
    },
    {
      id: '1',
      date: '2024-05-03',
      voucher_no: '240547100',
      details: 'UDOYON KRISHI MACHINARY',
      pq: 1.0,
      sq: 0,
      prq: 0,
      st: 0,
      dp: 0,
      ep: 0,
      stock: 1
    }
  ]
}

const ProductLedgerPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='ledger' />

      {/* Panel Header */}
      <PanelHeader title='Product Ledger'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Product Ledger Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default ProductLedgerPage

import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { DataTable } from '@/components/shared/DataTable'
import { LowestSale, columns } from './_components/columns'

export const metadata: Metadata = {
  title: 'Lowest Sale Product'
}

async function getData(): Promise<LowestSale[]> {
  return [
    {
      id: '1',
      product_name: '0108 - Jut',
      quantity: 23
    },
    {
      id: '2',
      product_name: '1197 - 180KG DRAM GRESS SADA BEST',
      quantity: 23
    },
    {
      id: '3',
      product_name: '	1174 - GRESS KG SADA COLOR',
      quantity: 23
    },
    {
      id: '4',
      product_name: '0645 - 205L HYDROLIC 68 JONE BRAND V',
      quantity: 23
    },
    {
      id: '5',
      product_name: '0067 - 205L HYDROLIC APOIL 68 BEST QUALITY',
      quantity: 23
    },
    {
      id: '6',
      product_name: '1076 - 205L GEAR OIL EP-460',
      quantity: 23
    },
    {
      id: '7',
      product_name: '	0003 - 32213 BEARING KG',
      quantity: 23
    },
    {
      id: '8',
      product_name: '	1852 - 205L HYDROLIC H-68 JONE',
      quantity: 23
    },
    {
      id: '9',
      product_name: '0939 - 32216 BEARING KG',
      quantity: 23
    },
    {
      id: '10',
      product_name: '0085 - Fucks FN3 400GM',
      quantity: 23
    }
  ]
}

const LowestSaleProductPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Lowest Sale Product'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Lowest Sale Product Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default LowestSaleProductPage

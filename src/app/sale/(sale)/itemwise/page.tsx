import React from 'react'
import { Metadata } from 'next'
import { SaleItemWise, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Item Wise Sale'
}

async function getData(): Promise<SaleItemWise[]> {
  return [
    {
      id: '1',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '2',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '3',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '4',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '5',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '6',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '7',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '8',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '9',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '10',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    },
    {
      id: '11',
      date: '2023-03-19',
      voucher_no: '230334422',
      quantity: 2,
      showroom: 'bluemotors123'
    }
  ]
}

const SaleItemWisePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='sale' />

      {/* Panel Header */}
      <PanelHeader title='Item Wise Sale'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Sale Item wise Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default SaleItemWisePage

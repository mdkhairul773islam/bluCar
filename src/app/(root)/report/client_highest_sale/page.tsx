import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { DataTable } from '@/components/shared/DataTable'
import { ClientHighestSale, columns } from './_components/columns'

export const metadata: Metadata = {
  title: 'Client Wise Highest Sale'
}

async function getData(): Promise<ClientHighestSale[]> {
  return [
    {
      id: '1',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '2',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '3',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '4',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '5',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '6',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '7',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '8',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '9',
      client: 'John Smith',
      amount: 22343
    },
    {
      id: '10',
      client: 'John Smith',
      amount: 22343
    }
  ]
}

const ClientHighestSalePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Client Wise Highest Sale'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Client Wise Highest Sale Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ClientHighestSalePage

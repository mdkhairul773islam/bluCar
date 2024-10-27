import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { DataTable } from '@/components/shared/DataTable'
import { ClientLowestSale, columns } from './_components/columns'

export const metadata: Metadata = {
  title: 'Client Wise Lowest Sale'
}

async function getData(): Promise<ClientLowestSale[]> {
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

const ClientLowestSalePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Client Wise Lowest Sale'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Client Wise Lowest Sale Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ClientLowestSalePage

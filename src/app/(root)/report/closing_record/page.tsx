import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { ClosingBalance, columns } from './_components/columns'
import { BasicTable } from '@/components/shared/BasicTable'

export const metadata: Metadata = {
  title: 'Balance Closing Record'
}

async function getData(): Promise<ClosingBalance[]> {
  return [
    {
      id: '1',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '2',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '3',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '4',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '5',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '6',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '7',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '8',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '9',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    },
    {
      id: '10',
      showroom: 'M/S Blue Motors',
      date: '2023-03-19',
      closing_balance: 1632.0
    }
  ]
}

const ClosingRecordPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Balance Closing Record'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Balance Closing Record Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default ClosingRecordPage

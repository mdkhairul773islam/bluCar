import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Party, columns } from './_components/columns'
import { BasicTable } from '@/components/shared/BasicTable'

export const metadata: Metadata = {
  title: 'All Payable Party'
}

async function getData(): Promise<Party[]> {
  return [
    {
      id: '1',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    },
    {
      id: '2',
      name: 'hello123',
      status: 'Payable',
      balance: 45564,
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH'
    },
    {
      id: '3',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    },
    {
      id: '4',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    },
    {
      id: '5',
      name: 'hello123',
      status: 'Payable',
      balance: 45564,
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH'
    },
    {
      id: '6',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    },
    {
      id: '7',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    },
    {
      id: '8',
      name: 'hello123',
      status: 'Payable',
      balance: 45564,
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH'
    },
    {
      id: '9',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    },
    {
      id: '10',
      name: 'hello123',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH',
      balance: 45564,
      status: 'Payable'
    }
  ]
}

const PayablePartyPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='party' />

      {/* Panel Header */}
      <PanelHeader title='All Payable Party'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* All Payable Party Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default PayablePartyPage

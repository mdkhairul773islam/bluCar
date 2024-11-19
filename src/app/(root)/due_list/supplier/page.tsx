import React from 'react'
import { Metadata } from 'next'
import { Due, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Supplier Due'
}

async function getData(): Promise<Due[]> {
  return [
    {
      id: '1',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '2',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '3',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '4',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '5',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '6',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '7',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '8',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '9',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '10',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '12',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '12',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '13',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '14',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',

      balance: 800,
      type: 'Payable'
    },
    {
      id: '15',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '16',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    },
    {
      id: '17',
      name: 'TAHA MONI ENGENEARING WARKSHOP	',
      mobile: '01740952501',
      address:
        'NOUGA BOT TOLA KISURGONJ, TAHA MONI ENGENEARING WARKSHOP DBBL ACCOUNT 231.110.7802	',
      balance: 800,
      type: 'Payable'
    }
  ]
}

const SupplierDueListPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='dueList' />

      {/* Panel Header */}
      <PanelHeader title='All Supplier Due'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* All Supplier Due Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default SupplierDueListPage

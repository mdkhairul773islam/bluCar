import React from 'react'
import { Metadata } from 'next'
import { MdTransaction, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Md Transaction Ledger'
}

async function getData(): Promise<MdTransaction[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '2',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '3',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '4',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '5',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '6',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '7',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '8',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '9',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '10',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    },
    {
      id: '11',
      date: '2019-09-07	',
      godown_name: 'M/S BLUE MOTORS',
      debit: 2312,
      credit: 2323,
      balance: 228745.0
    }
  ]
}

const MdTransactionLedgerPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='mdTransaction' />

      {/* Panel Header */}
      <PanelHeader title='Md Transaction Ledger'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Md Transaction Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default MdTransactionLedgerPage

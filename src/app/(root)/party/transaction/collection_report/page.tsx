import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import { Transaction, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transaction Collection Report'
}

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: '1',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '2',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '3',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '4',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '5',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '6',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '7',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '8',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '9',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    },
    {
      id: '10',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      amount: 45564
    }
  ]
}

const DeleteTransactionPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='party' />

      {/* Panel Header */}
      <PanelHeader title='Transaction Collection Report'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Transaction Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default DeleteTransactionPage

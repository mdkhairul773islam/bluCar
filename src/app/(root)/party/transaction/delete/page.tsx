import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import { Transaction, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delete Transaction'
}

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: '1',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '2',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Receivable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '3',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '4',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '5',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Receivable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '6',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '7',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '8',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Receivable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '9',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    },
    {
      id: '10',
      date: '2019-08-29',
      customer_id: '2423423',
      name: 'Motor',
      trx_no: '875645',
      transaction_by: 'John Doe',
      transaction_type: 'Payable',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      paid_by: 'Cash'
    }
  ]
}

const DeleteTransactionPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='party' />

      {/* Panel Header */}
      <PanelHeader title='Delete Transaction'>
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

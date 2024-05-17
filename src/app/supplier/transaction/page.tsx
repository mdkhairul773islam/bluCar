import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import AddTransaction from './_components/AddTransaction'
import { Transaction, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { BasicTable } from '@/components/shared/BasicTable'

export const metadata: Metadata = {
  title: 'All Transaction'
}

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: '1',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '2',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Receivable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '3',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '4',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '5',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Receivable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '6',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '7',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '8',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Receivable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '9',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    },
    {
      id: '10',
      date: '2019-08-29',
      trx_no: '875645',
      name: 'Motor',
      transaction_type: 'Payable',
      transaction_by: 'Cash',
      username: 'hello123',
      paid: 45564,
      remission: 23424,
      transation_method: 'Cash'
    }
  ]
}

const TransactionPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='All Transaction'>
        <AddTransaction />
      </PanelHeader>

      {/* Transaction Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default TransactionPage

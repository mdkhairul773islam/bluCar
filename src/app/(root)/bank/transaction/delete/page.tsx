import React from 'react'
import { Metadata } from 'next'
import { Transaction, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'All Transaction'
}

async function getData(): Promise<Transaction[]> {
  return [
    {
      id: '1',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '2',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '3',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '4',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '5',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '6',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '7',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '8',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '9',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    },
    {
      id: '10',
      bank_name: 'Mutual Trust Bank LTD',
      account_number: '0210009264',
      initial_balance: 113067,
      total_withdraw: 113067,
      total_payment: 113067,
      amount: 113067
    }
  ]
}

const DeleteTransactionPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='bank' />

      {/* Panel Header */}
      <PanelHeader title='Delete Transaction'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Transaction Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default DeleteTransactionPage

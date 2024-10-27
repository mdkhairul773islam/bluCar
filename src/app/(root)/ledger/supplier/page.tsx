import React from 'react'
import { Metadata } from 'next'
import { Supplier, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { BasicTable } from '@/components/shared/BasicTable'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Supplier Ledger'
}

async function getData(): Promise<Supplier[]> {
  return [
    {
      id: '1',
      supplier_name: 'TAHA MONI ENGENEARING WARKSHOP',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      remission: 166000,
      status: 'Payable'
    },
    {
      id: '2',
      supplier_name: 'SALAM MOTORS	',
      opening_balance: 25200,
      debit: 2642275,
      credit: 2667475,
      balance: 0,
      remission: 125,
      status: 'Payable'
    },
    {
      id: '3',
      supplier_name: 'Shorif Motors	',
      opening_balance: 16300,
      debit: 28200,
      credit: 44500,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '4',
      supplier_name: 'ACI MOTORS LTD SONALIKA	',
      opening_balance: 124876,
      debit: 9093511.2,
      credit: 9019922.1,
      balance: 198465.1,
      remission: 3958.1,
      status: 'Payable'
    },
    {
      id: '5',
      supplier_name: 'General',
      opening_balance: 0,
      debit: 11977252.82,
      credit: 11997246.06,
      balance: 19993.24,
      remission: 5676820.67,
      status: 'Receivable'
    },
    {
      id: '6',
      supplier_name: 'KHAN JAHAN ALI MOTORS	',
      opening_balance: 0,
      debit: 723761,
      credit: 723761,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '7',
      supplier_name: 'Atik Tayar Hose	',
      opening_balance: 16000,
      debit: 0,
      credit: 16000,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '8',
      supplier_name: 'Alamgir Gress	',
      opening_balance: 0,
      debit: 112100,
      credit: 112100,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '9',
      supplier_name: 'KAWSER MOTORS	',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      remission: 166000,
      status: 'Payable'
    },
    {
      id: '10',
      supplier_name: 'Arafat Tractor Soluation	',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      remission: 166000,
      status: 'Receivable'
    },
    {
      id: '11',
      supplier_name: 'Shiblu And Sons	',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      remission: 166000,
      status: 'Payable'
    }
  ]
}

const SupplierLedgerPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='ledger' />

      {/* Panel Header */}
      <PanelHeader title='Supplier Ledger'>
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

export default SupplierLedgerPage

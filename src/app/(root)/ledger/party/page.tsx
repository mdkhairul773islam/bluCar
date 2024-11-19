import React from 'react'
import { Metadata } from 'next'
import { Party, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Party Ledger'
}

async function getData(): Promise<Party[]> {
  return [
    {
      id: '1',
      party_name: 'MD ABDULLAH	',
      address: 'Relgait',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '2',
      party_name: 'MD ABU SHAHID	',
      address: 'Jonmejoy,gafargaon,mymensingh	',
      opening_balance: 25200,
      debit: 2642275,
      credit: 2667475,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '3',
      party_name: 'AJAHAR ALI MIR	',
      address: 'PUKHURIYA,GAFARGAON,MYMENSINGH	',
      opening_balance: 16300,
      debit: 28200,
      credit: 44500,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '4',
      party_name: 'Akash',
      address: 'Dugasiya',
      opening_balance: 124876,
      debit: 9093511.2,
      credit: 9019922.1,
      balance: 198465.1,
      status: 'Payable'
    },
    {
      id: '5',
      party_name: 'MD AKHLASH UDDIN	',
      address: 'Emambari,Gafargaon,Mymensingh	',
      opening_balance: 0,
      debit: 11977252.82,
      credit: 11997246.06,
      balance: 19993.24,
      status: 'Receivable'
    },
    {
      id: '6',
      party_name: 'Akram Hossain	',
      address: 'Goyespur',
      opening_balance: 0,
      debit: 723761,
      credit: 723761,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '7',
      party_name: 'Alam	',
      address: 'Charalgi',
      opening_balance: 16000,
      debit: 0,
      credit: 16000,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '8',
      party_name: 'Alam Vai	',
      address: 'Jonmejoy',
      opening_balance: 0,
      debit: 112100,
      credit: 112100,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '9',
      party_name: 'Anower',
      address: 'Valuka',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      status: 'Payable'
    },
    {
      id: '10',
      party_name: 'MD. ANOWER	',
      address: 'JONMEJOY,GAFARGAON,MYMENSING	',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      status: 'Receivable'
    },
    {
      id: '11',
      party_name: 'MD ARMAN MIA	',
      address: 'Dugasiya',
      opening_balance: 166000,
      debit: 0,
      credit: 166000,
      balance: 0,
      status: 'Payable'
    }
  ]
}

const PartyLedgerPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='ledger' />

      {/* Panel Header */}
      <PanelHeader title='Party Ledger'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Party Ledger Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default PartyLedgerPage

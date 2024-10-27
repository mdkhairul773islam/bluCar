import React from 'react'
import { Metadata } from 'next'
import { Party, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CirclePlus, ListTodo } from 'lucide-react'
import PartyAlert from './_components/PartyAlert'

export const metadata: Metadata = {
  title: 'All Party'
}

async function getData(): Promise<Party[]> {
  return [
    {
      id: '1',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 0,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Receivable'
    },
    {
      id: '2',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 0,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Payable'
    },
    {
      id: '3',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 15929,
      credit_limit: 10000.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Receivable'
    },
    {
      id: '4',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 0,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Receivable'
    },
    {
      id: '5',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 0,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Payable'
    },
    {
      id: '6',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 2008,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Receivable'
    },
    {
      id: '7',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 2640,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Receivable'
    },
    {
      id: '8',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 0,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Payable'
    },
    {
      id: '9',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 51855.4,
      credit_limit: 10000.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Payable'
    },
    {
      id: '10',
      customer_id: '0018',
      party_name: 'Md Abdullah	Relgait',
      address: 'N/A',
      mobile: '01711169101',
      guarantor_name: 'N/A',
      balance: 0,
      credit_limit: 0.0,
      zone_name: 'Mymensingh',
      showroom: 'M/S Blue Motors',
      status: 'Receivable'
    }
  ]
}

const PartyPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='party' />

      {/* Panel Header */}
      <PanelHeader title='All Party'>
        <Link href='/party/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add Party
          </Button>
        </Link>
      </PanelHeader>

      {/* Party Alert */}
      <PartyAlert />

      {/* Party Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default PartyPage

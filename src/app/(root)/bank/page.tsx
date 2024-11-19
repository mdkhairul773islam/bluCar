import React from 'react'
import { Metadata } from 'next'
import AddBank from './_components/AddBank'
import { Bank, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Bank'
}

async function getData(): Promise<Bank[]> {
  return [
    {
      id: '1',
      name: 'Mutual Trust Bank LTD	'
    },
    {
      id: '2',
      name: 'Dutch Bangla Bank Limited	'
    },
    {
      id: '3',
      name: 'Shah Jalal Islami Bank limited	'
    },
    {
      id: '4',
      name: 'Islami Bank Limited	'
    },
    {
      id: '5',
      name: 'BKASH'
    },
    {
      id: '6',
      name: 'TRANSFER'
    },
    {
      id: '7',
      name: 'RUPALI BANK LIMITED'
    }
  ]
}

const AllBankPage = async () => {
  const data = await getData()

  return (
    <>
      {/* Active Menu */}
      <ActiveMenu menu='bank' />

      {/* Panel Header */}
      <PanelHeader title='All Bank'>
        <AddBank />
      </PanelHeader>

      {/* Bank Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default AllBankPage

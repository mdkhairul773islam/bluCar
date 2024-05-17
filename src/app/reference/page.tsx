import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import PanelHeader from '@/components/shared/PanelHeader'
import AddReference from './_components/AddReference'
import { Reference, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'

export const metadata: Metadata = {
  title: 'Reference'
}

async function getData(): Promise<Reference[]> {
  return [
    {
      id: '1',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    },
    {
      id: '2',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    },
    {
      id: '3',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    },
    {
      id: '4',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    },
    {
      id: '5',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    },
    {
      id: '6',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    },
    {
      id: '7',
      name: 'John Smith',
      mobile: '019823478124',
      address: 'North america',
      area: 'North'
    }
  ]
}

const ReferencePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='reference' />

      {/* Panel Header */}
      <PanelHeader title='Reference'>
        <AddReference />
      </PanelHeader>

      {/* Reference Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ReferencePage

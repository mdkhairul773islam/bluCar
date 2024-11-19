import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import PanelHeader from '@/components/shared/PanelHeader'
import AddZone from './_components/AddZone'
import { Zone, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'

export const metadata: Metadata = {
  title: 'Zone'
}

async function getData(): Promise<Zone[]> {
  return [
    {
      id: '1',
      name: 'John Smith'
    },
    {
      id: '2',
      name: 'John Smith'
    },
    {
      id: '3',
      name: 'John Smith'
    },
    {
      id: '4',
      name: 'John Smith'
    },
    {
      id: '5',
      name: 'John Smith'
    },
    {
      id: '6',
      name: 'John Smith'
    },
    {
      id: '7',
      name: 'John Smith'
    }
  ]
}

const ZonePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='zone' />

      {/* Panel Header */}
      <PanelHeader title='Zone'>
        <AddZone />
      </PanelHeader>

      {/* Zone Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ZonePage

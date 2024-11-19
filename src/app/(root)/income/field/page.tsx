import React from 'react'
import { Metadata } from 'next'
import AddField from './_components/AddField'
import { Field, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Field of Income'
}

async function getData(): Promise<Field[]> {
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

const FieldPage = async () => {
  const data = await getData()

  return (
    <>
      {/* Active Menu */}
      <ActiveMenu menu='income' />

      {/* Panel Header */}
      <PanelHeader title='Field of Income'>
        <AddField />
      </PanelHeader>

      {/* Field Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default FieldPage

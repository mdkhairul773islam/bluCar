import React from 'react'
import { Metadata } from 'next'
import AddField from './_components/AddField'
import { Field, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Field of Fixed Asset'
}

async function getData(): Promise<Field[]> {
  return [
    {
      id: '1',
      name: 'Furniture'
    },
    {
      id: '2',
      name: 'Laptop'
    },
    {
      id: '3',
      name: 'Rag'
    },
    {
      id: '4',
      name: 'Table'
    },
    {
      id: '5',
      name: 'Printer'
    },
    {
      id: '6',
      name: 'Machine'
    },
    {
      id: '7',
      name: 'Fan'
    }
  ]
}

const FieldPage = async () => {
  const data = await getData()

  return (
    <>
      {/* Active Menu */}
      <ActiveMenu menu='fixedAsset' />

      {/* Panel Header */}
      <PanelHeader title='Field of Fixed Asset'>
        <AddField />
      </PanelHeader>

      {/* Field Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default FieldPage

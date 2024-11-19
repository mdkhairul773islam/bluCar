import React from 'react'
import { Metadata } from 'next'
import AddFixedAsset from './_components/AddFixedAsset'
import { FixedAsset, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Fixed Asset'
}

async function getData(): Promise<FixedAsset[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '2',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '3',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '4',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '5',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '6',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '7',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '8',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    },
    {
      id: '9',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      field_name: 'Revenue',
      description: 'Hydrolic Pipe',
      spend_by: 'owner',
      quantity: 1,
      amount: 5000
    }
  ]
}

const FixedAssetPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='fixedAsset' />

      {/* Panel Header */}
      <PanelHeader title='All Fixed Asset'>
        <AddFixedAsset />
      </PanelHeader>

      {/* FixedAsset Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default FixedAssetPage

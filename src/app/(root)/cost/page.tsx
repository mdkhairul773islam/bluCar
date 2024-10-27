import React from 'react'
import { Metadata } from 'next'
import AddCost from './_components/AddCost'
import { Cost, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Cost'
}

async function getData(): Promise<Cost[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '2',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '3',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '4',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '5',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '6',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '7',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '8',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    },
    {
      id: '9',
      date: '2019-09-07	',
      showroom: 'M/S Blue MOTORS',
      username: 'bluemotors123',
      field_cost: 'Revenue',
      description: 'Hydrolic Pipe',
      cost_by: 'owner',
      amount: 5000
    }
  ]
}

const CostPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='cost' />

      {/* Panel Header */}
      <PanelHeader title='All Cost'>
        <AddCost />
      </PanelHeader>

      {/* Cost Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default CostPage

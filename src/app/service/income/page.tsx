import React from 'react'
import { Metadata } from 'next'
import AddIncome from './_components/AddIncome'
import { Income, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Income'
}

async function getData(): Promise<Income[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '2',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '3',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '4',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '5',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '6',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '7',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '8',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    },
    {
      id: '9',
      date: '2019-09-07	',
      showroom: 'M/S Blue Motors',
      customer_name: 'bluemotors123',
      order_no: '12345564',
      remarks: 'Hydrolic Pipe',
      amount: 5000
    }
  ]
}

const IncomePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='service' />

      {/* Panel Header */}
      <PanelHeader title='All Income'>
        <AddIncome />
      </PanelHeader>

      {/* Income Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default IncomePage

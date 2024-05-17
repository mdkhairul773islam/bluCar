import React from 'react'
import { Metadata } from 'next'
import AddOrder from './_components/AddOrder'
import { Order, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Order'
}

async function getData(): Promise<Order[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'ABDUL AHAD TAFEE+HYDROLIC TOLY MAY-24',
      remarks: 'N/A'
    },
    {
      id: '2',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'SHOHAG EXCHANGE APRIL-24	',
      remarks: 'N/A'
    },
    {
      id: '3',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'STAR HAMINDRA 2 CILIDER+ NON HYDROLIC TOLY APRIL-2024	',
      remarks: 'N/A'
    },
    {
      id: '4',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'MOSTAFIZUR RAHMAN MOSTO MARCH-24 NEW	',
      remarks: 'N/A'
    },
    {
      id: '5',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'TAFE-45 SHAH JAHAN EXCHANGE MARCH-24 (M04116)	',
      remarks: 'N/A'
    },
    {
      id: '6',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'SONALIKA 45RX T-1 MARCH-24	',
      remarks: 'N/A'
    },
    {
      id: '7',
      date: '2019-09-07	',
      order_no: '123123124',
      name: '52MAX MARCH-24	',
      remarks: 'N/A'
    },
    {
      id: '8',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'JOHIRUL ISLAM HYDROLIC OLD HYDROLIC TOLY MARCH-24	',
      remarks: 'N/A'
    },
    {
      id: '9',
      date: '2019-09-07	',
      order_no: '123123124',
      name: 'NEW HHYDROLIC TOLY 6*3 MARCH-2024	',
      remarks: 'N/A'
    }
  ]
}

const OrderPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='service' />

      {/* Panel Header */}
      <PanelHeader title='All Order'>
        <AddOrder />
      </PanelHeader>

      {/* Order Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default OrderPage

import React from 'react'
import { Metadata } from 'next'
import OrderTable, { Order } from './_components/OrderTable'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Stock'
}

async function getData(): Promise<Order[]> {
  return [
    {
      id: '1',
      product_name: 'ACI PUMP 3/16',
      product_code: '1001',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '2',
      product_name: 'ACI PUMP 3/16',
      product_code: '1002',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '3',
      product_name: 'ACI PUMP 3/16',
      product_code: '1003',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '4',
      product_name: 'ACI PUMP 3/16',
      product_code: '1004',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '5',
      product_name: 'ACI PUMP 3/16',
      product_code: '1005',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '6',
      product_name: 'ACI PUMP 3/16',
      product_code: '1006',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '7',
      product_name: 'ACI PUMP 3/16',
      product_code: '1007',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '8',
      product_name: 'ACI PUMP 3/16',
      product_code: '1008',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '9',
      product_name: 'ACI PUMP 3/16',
      product_code: '1009',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '10',
      product_name: 'ACI PUMP 3/16',
      product_code: '1010',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '11',
      product_name: 'ACI PUMP 3/16',
      product_code: '1011',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '12',
      product_name: 'ACI PUMP 3/16',
      product_code: '1012',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '13',
      product_name: 'ACI PUMP 3/16',
      product_code: '1013',
      category: 'Stading Bearing',
      quantity: 16,

      showroom: 'M/S Blue Motors'
    },
    {
      id: '14',
      product_name: 'ACI PUMP 3/16',
      product_code: '1014',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '15',
      product_name: 'ACI PUMP 3/16',
      product_code: '1015',
      category: 'Stading Bearing',
      quantity: 16,

      showroom: 'M/S Blue Motors'
    },
    {
      id: '16',
      product_name: 'ACI PUMP 3/16',
      product_code: '1016',
      category: 'Stading Bearing',
      quantity: 16,

      showroom: 'M/S Blue Motors'
    },
    {
      id: '17',
      product_name: 'ACI PUMP 3/16',
      product_code: '1017',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    },
    {
      id: '18',
      product_name: 'ACI PUMP 3/16',
      product_code: '1018',
      category: 'Stading Bearing',
      quantity: 16,

      showroom: 'M/S Blue Motors'
    },
    {
      id: '19',
      product_name: 'ACI PUMP 3/16',
      product_code: '1019',
      category: 'Stading Bearing',
      quantity: 16,
      showroom: 'M/S Blue Motors'
    }
  ]
}

const OrdersPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='orders' />

      {/* Panel Header */}
      <PanelHeader title='Orders' />

      {/* Order Table */}
      <OrderTable data={data} />
    </>
  )
}

export default OrdersPage

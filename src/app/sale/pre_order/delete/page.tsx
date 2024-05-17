import React from 'react'
import { Metadata } from 'next'
import { PreOrderSale, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delete Pre-order Sale'
}

async function getData(): Promise<PreOrderSale[]> {
  return [
    {
      id: '1',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '2',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '3',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '4',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '5',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '6',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '7',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '8',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '9',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    },
    {
      id: '10',
      date: '2024-05-12',
      username: 'bluemotors124',
      client_name: 'John Doe',
      reference_name: 'Adam Smith',
      voucher_no: '24051247420',
      manufacturer: 'APOIL',
      quantity: 1.0,
      total: 320.0,
      discount: 0.0,
      paid: 320,
      due: 0.0,
      remark: 'N/A	',
      showroom: 'M/S Blue Motors'
    }
  ]
}

const DeletePreOrderSalePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='sale' />

      {/* Panel Header */}
      <PanelHeader title='Delete Pre-order Sale'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Delete Pre-order Sale Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default DeletePreOrderSalePage

import React from 'react'
import { Metadata } from 'next'
import { PreOrder, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CirclePlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Purchase Pre-order'
}

async function getData(): Promise<PreOrder[]> {
  return [
    {
      id: '1',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '2',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '3',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '4',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '5',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '6',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '7',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '8',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '9',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '10',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    },
    {
      id: '11',
      date: '2023-03-19',
      voucher_no: '230334422',
      supplier_name: 'NOJRUL BATTARY',
      mobile: '01716190832',
      username: 'bluemotors123',
      total: 33080.0,
      paid: 33080.0,
      due: 0.0,
      remark: 'N/A',
      showroom: 'BCI Motors'
    }
  ]
}

const PurchasePreOrderPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='All Purchase Pre-order'>
        <Link href='/purchase/pre_order/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add Purchase Pre-order
          </Button>
        </Link>
      </PanelHeader>

      {/* Purchase Pre Order Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default PurchasePreOrderPage

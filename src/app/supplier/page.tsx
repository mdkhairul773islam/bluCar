import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import AddSupplier from './_components/AddSupplier'
import { Supplier, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'

export const metadata: Metadata = {
  title: 'All Supplier'
}

async function getData(): Promise<Supplier[]> {
  return [
    {
      id: '1',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Active'
    },
    {
      id: '2',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Inactive'
    },
    {
      id: '3',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Active'
    },
    {
      id: '4',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Active'
    },
    {
      id: '5',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Active'
    },
    {
      id: '6',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Payable',
      status: 'Active'
    },
    {
      id: '7',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Active'
    },
    {
      id: '8',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Active'
    },
    {
      id: '9',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Receivable',
      status: 'Inactive'
    },
    {
      id: '10',
      date: '2019-08-29',
      showroom: 'M/S Blue Motors',
      name: 'Taha Moni Engineering Workshop',
      contact_person: 'MD Jamir Hosen',
      mobile: '01945578010',
      current_balance: 234234,
      type: 'Payable',
      status: 'Active'
    }
  ]
}

const SupplierPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='All Supplier'>
        <AddSupplier />
      </PanelHeader>

      {/* Supplier Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default SupplierPage

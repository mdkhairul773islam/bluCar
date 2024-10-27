import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import AddAdvancePayment from './_components/AddAdvancePayment'
import { AdvancePayment, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'

export const metadata: Metadata = {
  title: 'Advance Payment'
}

async function getData(): Promise<AdvancePayment[]> {
  return [
    {
      id: '1',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '2',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '3',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '4',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '5',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '6',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '7',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '8',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '9',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    },
    {
      id: '10',
      date: '2023-05-20',
      salary_month: '2023 - April',
      showroom: 'M/S Blue Motors',
      name: 'MD. ADNAN',
      mobile: '01825498778',
      designation: 'T.SALES ACCOUNTS EXECUTIVE',
      amount: 1000
    }
  ]
}

const AdvancePaymentPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='employee' />

      {/* Panel Header */}
      <PanelHeader title='All Advance Payment'>
        <AddAdvancePayment />
      </PanelHeader>

      {/* Advance Payment Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default AdvancePaymentPage

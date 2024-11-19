import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import {
  SalesPaid,
  salesPaidColumns
} from './_components/salesPaidTableColumns'
import { BasicTable } from '@/components/shared/BasicTable'
import {
  Expenditure,
  expenditureColumns
} from './_components/expenditureTableColumns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ReportSummery from './_components/ReportSummery'

export const metadata: Metadata = {
  title: 'Balance Sheet'
}

async function getSalesPaidData(): Promise<SalesPaid[]> {
  return [
    {
      id: '1',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '2',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '3',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '4',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '5',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '6',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '7',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '8',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '9',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    },
    {
      id: '10',
      client_name: 'N/A',
      voucher: '23423425',
      amount: 5500
    }
  ]
}

async function getExpenditureData(): Promise<Expenditure[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '2',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '3',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '4',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '5',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '6',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '7',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '8',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    },
    {
      id: '9',
      date: '2019-09-07	',
      order_no: '123123124',
      amount: 2342
    }
  ]
}

const BalanceSheetPage = async () => {
  const salesPaidData = await getSalesPaidData()
  const expenditureData = await getExpenditureData()

  return (
    <>
      <ActiveMenu menu='report' />

      {/* Panel Header */}
      <PanelHeader title='Balance Sheet'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      <div className='flex flex-col gap-6'>
        {/* Report Summery */}
        <ReportSummery />

        <div className='grid items-start gap-3 lg:grid-cols-2'>
          {/* Sales Paid Table */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <BasicTable data={salesPaidData} columns={salesPaidColumns} />
            </CardContent>
          </Card>

          {/* Expenditure Table */}
          <Card>
            <CardHeader>
              <CardTitle>Expenditure</CardTitle>
            </CardHeader>
            <CardContent>
              <BasicTable data={expenditureData} columns={expenditureColumns} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default BalanceSheetPage

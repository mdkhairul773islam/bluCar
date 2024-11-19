import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Income, incomeColumns } from './_components/incomeTableColumns'
import { BasicTable } from '@/components/shared/BasicTable'
import {
  Expenditure,
  expenditureColumns
} from './_components/expenditureTableColumns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ReportSummery from './_components/ReportSummery'

export const metadata: Metadata = {
  title: 'Report'
}

async function getIncomeData(): Promise<Income[]> {
  return [
    {
      id: '1',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '2',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '3',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '4',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '5',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '6',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '7',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '8',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '9',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
      amount: 5500
    },
    {
      id: '10',
      customer_name: 'N/A',
      order_no: 'SONALIKA 45RX T-1 MARCH-24',
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

const ReportPage = async () => {
  const incomeData = await getIncomeData()
  const expenditureData = await getExpenditureData()

  return (
    <>
      <ActiveMenu menu='service' />

      {/* Panel Header */}
      <PanelHeader title='Report'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      <div className='flex flex-col gap-6'>
        {/* Report Summery */}
        <ReportSummery />

        <div className='grid items-start gap-3 lg:grid-cols-2'>
          {/* Income Table */}
          <Card>
            <CardHeader>
              <CardTitle>Income</CardTitle>
            </CardHeader>
            <CardContent>
              <BasicTable data={incomeData} columns={incomeColumns} />
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

export default ReportPage

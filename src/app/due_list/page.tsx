import React from 'react'
import { Metadata } from 'next'
import { Due, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cash Party Due'
}

async function getData(): Promise<Due[]> {
  return [
    {
      id: '1',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '2',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '3',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '4',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '5',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '6',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '7',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '8',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '9',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '10',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '12',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '12',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '13',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '14',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '15',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '16',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    },
    {
      id: '17',
      date: '2020-12-20',
      godown_code: 'M/S Blue MOTORS',
      promise_date: '0000-00-00',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      voucher: '20122010748',
      grand_total: 2800.0,
      paid: 2000,
      due: 800
    }
  ]
}

const CashDueListPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='dueList' />

      {/* Panel Header */}
      <PanelHeader title='Cash Party Due'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Cash Party Due Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default CashDueListPage

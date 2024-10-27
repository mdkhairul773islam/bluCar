import React from 'react'
import { Metadata } from 'next'
import { Due, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Credit Party Due'
}

async function getData(): Promise<Due[]> {
  return [
    {
      id: '1',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '2',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '3',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '4',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '5',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '6',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '7',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '8',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '9',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '10',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '12',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '12',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '13',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '14',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',

      type: 'Receivable',
      due: 800
    },
    {
      id: '15',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '16',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    },
    {
      id: '17',
      customer_id: '1002',
      name: 'Kala Chan',
      mobile: '01740952501',
      address: 'Valuka',
      type: 'Receivable',
      due: 800
    }
  ]
}

const CreditDueListPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='dueList' />

      {/* Panel Header */}
      <PanelHeader title='Credit Party Due'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Credit Party Due Table */}
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default CreditDueListPage

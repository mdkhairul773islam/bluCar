import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Chalan, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chalan Delete History'
}

async function getData(): Promise<Chalan[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '2',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '3',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '4',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '5',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '6',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '7',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '8',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '9',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '10',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    },
    {
      id: '11',
      date: '2019-09-07	',
      client_name: 'RIPON MIA',
      chalan_no: '12720'
    }
  ]
}

const ChalanPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='chalan' />

      {/* Panel Header */}
      <PanelHeader title='Chalan Delete History'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Chalan Delete Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ChalanPage

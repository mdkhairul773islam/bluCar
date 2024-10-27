import React from 'react'
import { Metadata } from 'next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Damage, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Delete Damage'
}

async function getData(): Promise<Damage[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '2',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '3',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '4',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '5',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '6',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '7',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '8',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '9',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '10',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '11',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    },
    {
      id: '12',
      date: '2019-09-07	',
      product_code: '45512',
      product_name: 'Ring-35 Orginal Yh Cl(22252-000350) S904 J28',
      quantity: 10,
      username: 'bluemotors123',
      remark: 'Revenue'
    }
  ]
}

const DamagePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='damages' />

      {/* Panel Header */}
      <PanelHeader title='Delete Damage'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      {/* Damage Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default DamagePage

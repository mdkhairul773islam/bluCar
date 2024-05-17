import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import AddShowroom from './_components/AddShowroom'
import { Showroom, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'

export const metadata: Metadata = {
  title: 'Showroom'
}

async function getData(): Promise<Showroom[]> {
  return [
    {
      id: '1',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '2',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '3',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '4',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '5',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '6',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '7',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '8',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '9',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '10',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    },
    {
      id: '11',
      name: 'Showroom 01',
      manager: 'Justin Smith',
      mobile: '019823478124',
      mobile_two: '019823478124',
      mobile_three: '019823478124',
      address: 'North america',
      prefix: 'SM-1'
    }
  ]
}

const ShowroomPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='showroom' />

      {/* Panel Header */}
      <PanelHeader title='Showroom'>
        <AddShowroom />
      </PanelHeader>

      {/* Showroom Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ShowroomPage

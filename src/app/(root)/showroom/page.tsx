import React from 'react'
import { Metadata } from 'next'
import AddShowroom from './_components/AddShowroom'
import ActiveMenu from '@/components/shared/ActiveMenu'
import ShowroomTable from './_components/ShowroomTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Showroom'
}

const ShowroomPage = async () => {
  return (
    <>
      <ActiveMenu menu='showroom' />

      {/* Panel Header */}
      <PanelHeader title='Showroom'>
        <AddShowroom />
      </PanelHeader>

      <ShowroomTable />
    </>
  )
}

export default ShowroomPage

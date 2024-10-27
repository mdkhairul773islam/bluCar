import React from 'react'
import { Metadata } from 'next'
import AddBrand from './_components/AddBrand'
import BrandTable from './_components/BrandTable'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Brand'
}

const BrandPage = () => {
  return (
    <>
      <ActiveMenu menu='brand' />

      {/* Panel Header */}
      <PanelHeader title='Brand'>
        <AddBrand />
      </PanelHeader>

      {/* Brand Table */}
      <BrandTable />
    </>
  )
}

export default BrandPage

import React from 'react'
import { Metadata } from 'next'
import AddSupplier from './_components/AddSupplier'
import SupplierTable from './_components/SupplierTable'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Supplier'
}

const SupplierPage = async () => {
  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='All Supplier'>
        <AddSupplier />
      </PanelHeader>

      <SupplierTable />
    </>
  )
}

export default SupplierPage

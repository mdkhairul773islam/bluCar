import React from 'react'
import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SupplierDetail from './_components/SupplierDetail'

export const metadata: Metadata = {
  title: 'Show Supplier'
}

const SupplierShowPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='Supplier Details' />

      <SupplierDetail supplierId={params.id} />
    </>
  )
}

export default SupplierShowPage

import React from 'react'
import { Metadata } from 'next'
import AddProduct from './_components/AddProduct'
import ProductTable from './_components/ProductTable'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Product'
}

const ProductPage = async () => {
  return (
    <>
      <ActiveMenu menu='product' />

      {/* Panel Header */}
      <PanelHeader title='Product'>
        <AddProduct />
      </PanelHeader>

      {/* Product Table */}
      <ProductTable />
    </>
  )
}

export default ProductPage

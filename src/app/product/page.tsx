import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import AddProduct from './_components/AddProduct'
import { Product, columns } from './_components/columns'
import { DataTable } from '@/components/shared/DataTable'
import ActiveMenu from '@/components/shared/ActiveMenu'

export const metadata: Metadata = {
  title: 'Product'
}

async function getData(): Promise<Product[]> {
  return [
    {
      id: '1',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '2',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '3',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '4',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '5',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '6',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '7',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    },
    {
      id: '8',
      name: 'Piston Swaraj	',
      product_code: '0563',
      category: '	Engile Kit',
      brand: 'Sonalika',
      purchase_price: 1500,
      sale_price: 2000,
      unit: 'pcs',
      status: 'Available'
    }
  ]
}

const ProductPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='product' />

      {/* Panel Header */}
      <PanelHeader title='Product'>
        <AddProduct />
      </PanelHeader>

      {/* Product Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default ProductPage

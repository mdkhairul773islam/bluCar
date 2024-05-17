import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import AddPurchaseTableForm from './_components/AddPurchaseTableForm'

export const metadata: Metadata = {
  title: 'Add Purchase  Pre Order'
}

const AddPurchasePreOrderPage = async () => {
  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='Add Purchase  Pre Order'>
        <Link href='/purchase/pre_order'>
          <Button className='bg-brand'>All Purchase Pre-order</Button>
        </Link>
      </PanelHeader>

      {/* Add New Purchase  */}
      <AddPurchaseTableForm />
    </>
  )
}

export default AddPurchasePreOrderPage

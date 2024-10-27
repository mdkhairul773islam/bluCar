import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ListTodo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import AddPreOrderSaleSearch from './_components/AddPreOrderSaleSearch'
import PanelHeader from '@/components/shared/PanelHeader'
import AddPreOrderSaleTableForm from './_components/AddPreOrderSaleTableForm'

export const metadata: Metadata = {
  title: 'Add New Pre-order Sale'
}

const AddPreOrderSalePage = async () => {
  return (
    <>
      <ActiveMenu menu='sale' />

      {/* Panel Header */}
      <PanelHeader title='Add New Pre-order Sale'>
        <Link href='/sale'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Pre-order Sale
          </Button>
        </Link>
      </PanelHeader>

      <div className='grid gap-4'>
        {/* Add Pre-order Sale Search */}
        <AddPreOrderSaleSearch />

        <div className='h-px bg-border'></div>

        {/* Add New Pre-order Sale  */}
        <AddPreOrderSaleTableForm />
      </div>
    </>
  )
}

export default AddPreOrderSalePage

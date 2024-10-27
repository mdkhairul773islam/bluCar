import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import Link from 'next/link'
import AddStockTransferTableForm from './_components/AddStockTransferTableForm'
import { Card } from '@/components/ui/card'
import SearchStock from './_components/SearchStock'
import { ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: ' Stock Transfer'
}

const AddStockTransferPage = async () => {
  return (
    <>
      <ActiveMenu menu='stockTransfer' />

      {/* Panel Header */}
      <PanelHeader title=' Stock Transfer'>
        <Link href='/stock_transfer'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            View All
          </Button>
        </Link>
      </PanelHeader>

      <div className='flex flex-col gap-8'>
        {/* Search Stock */}
        <SearchStock />

        {/* Stock Transfer  */}
        <AddStockTransferTableForm />
      </div>
    </>
  )
}

export default AddStockTransferPage

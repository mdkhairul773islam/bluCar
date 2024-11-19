import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ListTodo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import AddSaleReturnSearch from './_components/AddSaleReturnSearch'
import PanelHeader from '@/components/shared/PanelHeader'
import AddSaleReturnTableForm from './_components/AddSaleReturnTableForm'

export const metadata: Metadata = {
  title: 'Add Sale Return'
}

const AddSaleReturnPage = async () => {
  return (
    <>
      <ActiveMenu menu='sale' />

      {/* Panel Header */}
      <PanelHeader title='Add Sale Return'>
        <Link href='/sale/return'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Sale Return
          </Button>
        </Link>
      </PanelHeader>

      <div className='grid gap-4'>
        {/* Add Sale Return Search */}
        <AddSaleReturnSearch />

        <div className='h-px bg-border'></div>

        {/* Add Sale Return  */}
        <AddSaleReturnTableForm />
      </div>
    </>
  )
}

export default AddSaleReturnPage

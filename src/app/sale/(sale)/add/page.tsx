import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ListTodo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import AddSaleSearch from './_components/AddSaleSearch'
import PanelHeader from '@/components/shared/PanelHeader'
import AddSaleTableForm from './_components/AddSaleTableForm'

export const metadata: Metadata = {
  title: 'Add New Sale'
}

const AddSalePage = async () => {
  return (
    <>
      <ActiveMenu menu='sale' />

      {/* Panel Header */}
      <PanelHeader title='Add New Sale'>
        <Link href='/sale'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Sale
          </Button>
        </Link>
      </PanelHeader>

      <div className='grid gap-4'>
        {/* Add Sale Search */}
        <AddSaleSearch />

        <div className='h-px bg-border'></div>

        {/* Add New Sale  */}
        <AddSaleTableForm />
      </div>
    </>
  )
}

export default AddSalePage

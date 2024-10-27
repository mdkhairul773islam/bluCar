import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ListTodo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import AddHireSaleSearch from './_components/AddHireSaleSearch'
import PanelHeader from '@/components/shared/PanelHeader'
import AddHireSaleTableForm from './_components/AddHireSaleTableForm'

export const metadata: Metadata = {
  title: 'Add New HireSale'
}

const AddHireSalePage = async () => {
  return (
    <>
      <ActiveMenu menu='sale' />

      {/* Panel Header */}
      <PanelHeader title='Add Hire Sale'>
        <Link href='/sale/hire_sale'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Hire Sale
          </Button>
        </Link>
      </PanelHeader>

      <div className='grid gap-4'>
        {/* Add Hire Sale Search */}
        <AddHireSaleSearch />

        <div className='h-px bg-border'></div>

        {/* Add  Hire Sale  */}
        <AddHireSaleTableForm />
      </div>
    </>
  )
}

export default AddHireSalePage

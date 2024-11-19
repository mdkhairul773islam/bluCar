import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import Link from 'next/link'
import AddPurchaseTableForm from './_documents/AddPurchaseTableForm'
import { Card } from '@/components/ui/card'
import { ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Add New Purchase'
}

const AddPurchasePage = async () => {
  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='Add New Purchase'>
        <Link href='/purchase'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Purchase
          </Button>
        </Link>
      </PanelHeader>

      {/* Add New Purchase  */}
      <AddPurchaseTableForm />
    </>
  )
}

export default AddPurchasePage

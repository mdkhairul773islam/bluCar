import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import AddPurchaseReturnTableForm from './_components/AddPurchaseReturnTableForm'
import { ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Add  Purchase Return'
}

const AddPurchaseReturnPage = async () => {
  return (
    <>
      <ActiveMenu menu='purchase' />

      {/* Panel Header */}
      <PanelHeader title='Add Purchase Return'>
        <Link href='/purchase/return'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Purchase Return
          </Button>
        </Link>
      </PanelHeader>

      {/* Add New Purchase  */}
      <AddPurchaseReturnTableForm />
    </>
  )
}

export default AddPurchaseReturnPage

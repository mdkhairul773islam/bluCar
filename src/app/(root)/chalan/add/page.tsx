import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import Link from 'next/link'
import AddChalanTableForm from './_documents/AddChalanTableForm'
import { Card } from '@/components/ui/card'
import { ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Add New Chalan'
}

const AddChalanPage = async () => {
  return (
    <>
      <ActiveMenu menu='chalan' />

      {/* Panel Header */}
      <PanelHeader title='Add New Chalan'>
        <Link href='/chalan'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            View All
          </Button>
        </Link>
      </PanelHeader>

      <Card className='p-4'>
        {/* Add New Chalan  */}
        <AddChalanTableForm />
      </Card>
    </>
  )
}

export default AddChalanPage

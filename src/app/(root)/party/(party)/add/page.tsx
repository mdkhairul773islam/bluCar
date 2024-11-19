import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ListTodo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import CreatePartyForm from './_components/CreatePartyForm'

export const metadata: Metadata = {
  title: 'Add New Party'
}

const AddPartyPage = () => {
  return (
    <>
      <ActiveMenu menu='party' />

      {/* Panel Header */}
      <PanelHeader title='Add New Party'>
        <Link href='/party'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Party
          </Button>
        </Link>
      </PanelHeader>

      {/* Create Party Form */}
      <CreatePartyForm />
    </>
  )
}

export default AddPartyPage

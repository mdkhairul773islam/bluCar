import PanelHeader from '@/components/shared/PanelHeader'
import { Metadata } from 'next'
import React from 'react'
import CreateEmployeeForm from './_components/CreateEmployeeForm'
import ActiveMenu from '@/components/shared/ActiveMenu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Create Employee'
}

const CreateEmployee = () => {
  return (
    <>
      <ActiveMenu menu='employee' />

      {/* Panel Header */}
      <PanelHeader title='Create Employee'>
        <Link href='/employee'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Employee
          </Button>
        </Link>
      </PanelHeader>

      <CreateEmployeeForm />
    </>
  )
}

export default CreateEmployee

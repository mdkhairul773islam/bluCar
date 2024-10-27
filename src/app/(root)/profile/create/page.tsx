import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ListTodo, Users } from 'lucide-react'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import CreateProfileForm from './_components/CreateProfileForm'

export const metadata: Metadata = {
  title: 'Create Profile'
}

const CreateProfile = () => {
  return (
    <>
      {/* Panel Header */}
      <PanelHeader title='Create Profile'>
        <Link href='/profile/all'>
          <Button className='flex items-center gap-2 bg-brand'>
            <Users className='size-4' />
            All Profile
          </Button>
        </Link>
      </PanelHeader>

      {/* Create Profile Form  */}
      <CreateProfileForm />
    </>
  )
}

export default CreateProfile

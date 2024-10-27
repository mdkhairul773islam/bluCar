import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ListTodo, Users } from 'lucide-react'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import EditProfileForm from './_components/EditProfileForm'

export const metadata: Metadata = {
  title: 'Edit Profile'
}

const EditProfile = () => {
  return (
    <>
      {/* Panel Header */}
      <PanelHeader title='Edit Profile'>
        <Link href='/profile/all'>
          <Button className='flex items-center gap-2 bg-brand'>
            <Users className='size-4' />
            All Profile
          </Button>
        </Link>
      </PanelHeader>

      <EditProfileForm />
    </>
  )
}

export default EditProfile

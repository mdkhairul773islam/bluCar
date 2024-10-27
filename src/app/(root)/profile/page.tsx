import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import ProfileView from './_components/ProfileView'

export const metadata: Metadata = {
  title: 'Profile'
}

const ProfilePage = () => {
  return (
    <>
      {/* Panel Header */}
      <PanelHeader title='Profile' />

      <ProfileView />
    </>
  )
}

export default ProfilePage

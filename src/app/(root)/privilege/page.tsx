import React from 'react'
import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import ActiveMenu from '@/components/shared/ActiveMenu'
import UserSearchForm from './_components/UserSearchForm'
import SetPrivilege from './_components/SetPrivilege'

export const metadata: Metadata = {
  title: 'Set Privilege'
}

const PrivilegePage = () => {
  return (
    <>
      <ActiveMenu menu='privilege' />

      {/* Panel Header */}
      <PanelHeader title='Set Privilege' />

      <div className='flex flex-col gap-8'>
        <UserSearchForm />

        <SetPrivilege />
      </div>
    </>
  )
}

export default PrivilegePage

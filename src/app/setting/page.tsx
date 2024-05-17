import React from 'react'
import { Metadata } from 'next'
import Setting from './_components/Setting'

export const metadata: Metadata = {
  title: 'Settings'
}

const SettingsPage = () => {
  return (
    <>
      <Setting />
    </>
  )
}

export default SettingsPage

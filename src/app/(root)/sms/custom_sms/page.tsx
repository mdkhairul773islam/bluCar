import React from 'react'
import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SMSAlert from './_components/SMSAlert'
import SendSMSForm from './_components/SendSMSForm'

export const metadata: Metadata = {
  title: 'Custom SMS'
}

const SendSMSPage = () => {
  return (
    <>
      <ActiveMenu menu='sms' />

      {/* Panel Header */}
      <PanelHeader title='Custom SMS' />

      <div className='max-w-4xl'>
        {/* SMS Alert */}
        <SMSAlert />

        {/* Custom SMS Form  */}
        <SendSMSForm />
      </div>
    </>
  )
}

export default SendSMSPage

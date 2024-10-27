import React from 'react'
import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SearchSMSForm from './_components/SearchSMSForm'
import SMSAlert from './_components/SMSAlert'
import { SMS, columns } from './_components/columns'
import SendSMSForm from './_components/SendSMSForm'

export const metadata: Metadata = {
  title: 'Send SMS'
}

async function getData(): Promise<SMS[]> {
  return [
    {
      id: '1',
      name: 'TAHA MONI ENGENEARING WARKSHOP',
      mobile: '01945578010'
    },
    {
      id: '2',
      name: 'SALAM MOTORS',
      mobile: '01715593457'
    },
    {
      id: '3',
      name: 'Shorif Motors',
      mobile: '01918500511'
    },
    {
      id: '4',
      name: 'ACI MOTORS LTD SONALIKA',
      mobile: '01799993195'
    },
    {
      id: '5',
      name: 'MJL Bangladesh Limited',
      mobile: '01765008058'
    },
    {
      id: '6',
      name: 'Apoil',
      mobile: '01751200020'
    },
    {
      id: '7',
      name: 'SHAHIN ENGINEERING WORKSHOP',
      mobile: '01830001822'
    },
    {
      id: '8',
      name: 'Atik Tayar Hose',
      mobile: '01714783545'
    }
  ]
}

const SendSMSPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='sms' />

      {/* Panel Header */}
      <PanelHeader title='Mobile Number And SMS'>
        {/* Search Message */}
        <SearchSMSForm />
      </PanelHeader>

      <div className='max-w-4xl'>
        {/* SMS Alert */}
        <SMSAlert />

        {/* Send SMS Form  */}
        <SendSMSForm data={data} />
      </div>
    </>
  )
}

export default SendSMSPage

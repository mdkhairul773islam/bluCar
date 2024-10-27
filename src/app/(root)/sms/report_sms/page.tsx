import React from 'react'
import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SMSAlert from './_components/SMSAlert'
import { SMS, columns } from './_components/columns'
import { BasicTable } from '@/components/shared/BasicTable'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SMS Report'
}

async function getData(): Promise<SMS[]> {
  return [
    {
      id: '1',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '2',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '3',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '4',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '5',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '6',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '7',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '8',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '9',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '10',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '11',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    },
    {
      id: '12',
      date: '2023-10-24	',
      party_name: 'MD ABU SHAHID',
      mobile: '01945578010',
      message:
        'Dear Customer, Your received tk 500 has being completed successfully. Regards, Blue Motors	',
      showroom: 'M/S Blue Motors',
      status: 'Send'
    }
  ]
}

const SendSMSPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='sms' />

      {/* Panel Header */}
      <PanelHeader title='SMS Report'>
        <Button className='flex items-center gap-2 bg-brand'>
          <Download className='size-4' />
          Print
        </Button>
      </PanelHeader>

      <div className='flex flex-col gap-8'>
        {/* SMS Alert */}
        <SMSAlert />

        {/* Send SMS Form  */}
        <BasicTable columns={columns} data={data} />
      </div>
    </>
  )
}

export default SendSMSPage

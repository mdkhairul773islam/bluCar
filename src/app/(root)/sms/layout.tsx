import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const SMSLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Send SMS', href: '/sms/send_sms' },
          { label: 'Custom SMS', href: '/sms/custom_sms' },
          { label: 'Report SMS', href: '/sms/report_sms' }
        ]}
      />

      {children}
    </div>
  )
}

export default SMSLayout

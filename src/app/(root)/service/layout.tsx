import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'All Order', href: '/service/order' },
          { label: 'All Income', href: '/service/income' },
          { label: 'Delete Income', href: '/service/income/delete' },
          { label: 'All Expenditure', href: '/service/expenditure' },
          { label: 'Delete Expenditure', href: '/service/expenditure/delete' },
          { label: 'Report', href: '/service/report' }
        ]}
      />

      {children}
    </div>
  )
}

export default ServiceLayout

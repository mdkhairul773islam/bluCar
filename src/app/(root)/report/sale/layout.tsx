import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const SaleReportLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Sale Report', href: '/report/sale' },
          {
            label: 'Sale Item Report',
            href: '/report/sale/sale_item'
          }
        ]}
      />

      {children}
    </div>
  )
}

export default SaleReportLayout

import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const StockTransferLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Stock Transfer', href: '/stock_transfer/add' },
          { label: 'Stock Transfer History', href: '/stock_transfer' },
          {
            label: 'Stock Transfer Received History',
            href: '/stock_transfer/received'
          },
          {
            label: 'Stock Transfer Delete History',
            href: '/stock_transfer/delete'
          }
        ]}
      />

      {children}
    </div>
  )
}

export default StockTransferLayout

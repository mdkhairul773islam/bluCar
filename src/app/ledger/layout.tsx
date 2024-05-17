import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const LedgerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Supplier Ledger', href: '/ledger/supplier' },
          { label: 'Party Ledger', href: '/ledger/party' },
          { label: 'Product Ledger', href: '/ledger/product' }
        ]}
      />

      {children}
    </div>
  )
}

export default LedgerLayout

import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const SupplierLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'All Supplier', href: '/supplier' },
          { label: 'All Transaction', href: '/supplier/transaction' },
          { label: 'Delete Transaction', href: '/supplier/transaction/delete' }
        ]}
      />

      {children}
    </div>
  )
}

export default SupplierLayout

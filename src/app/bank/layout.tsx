import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const BankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'All Bank', href: '/bank' },
          { label: 'All Account', href: '/bank/account' },
          { label: 'All Transaction', href: '/bank/transaction' },
          { label: 'Delete Transaction', href: '/bank/transaction/delete' },
          { label: 'Bank Ledger', href: '/bank/ledger' }
        ]}
      />

      {children}
    </div>
  )
}

export default BankLayout

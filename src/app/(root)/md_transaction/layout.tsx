import type { ReactNode } from 'react';
import NavigationTabs from '@/components/shared/NavigationTabs'

const MdTransactionLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'All Md Transaction', href: '/md_transaction' },
          { label: 'Delete Md Transaction', href: '/md_transaction/delete' },
          { label: 'Ledger', href: '/md_transaction/ledger' }
        ]}
      />

      {children}
    </div>
  )
}

export default MdTransactionLayout

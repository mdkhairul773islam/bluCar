import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const PurchaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Add Purchase', href: '/purchase/add' },
          { label: 'All Purchase', href: '/purchase' },
          { label: 'Item Wise Purchase', href: '/purchase/itemwise' },
          { label: 'Purchase Delete History', href: '/purchase/delete' },
          { label: 'Add Purchase Return', href: '/purchase/return/add' },
          { label: 'All Purchase Return', href: '/purchase/return' },
          { label: 'Add Purchase Pre Order', href: '/purchase/pre_order/add' },
          { label: 'All Purchase  Pre Order', href: '/purchase/pre_order' }
        ]}
      />

      {children}
    </div>
  )
}

export default PurchaseLayout

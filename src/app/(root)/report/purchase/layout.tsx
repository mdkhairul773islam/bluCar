import type { ReactNode } from 'react';
import NavigationTabs from '@/components/shared/NavigationTabs'

const PurchaseReportLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Purchase Report', href: '/report/purchase' },
          {
            label: 'Purchase Item Report',
            href: '/report/purchase/purchase_item'
          }
        ]}
      />

      {children}
    </div>
  )
}

export default PurchaseReportLayout

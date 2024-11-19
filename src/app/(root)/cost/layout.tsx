import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const CostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Field of Cost', href: '/cost/field' },
          { label: 'All Cost', href: '/cost' },
          { label: 'Delete Cost', href: '/cost/delete' }
        ]}
      />

      {children}
    </div>
  )
}

export default CostLayout

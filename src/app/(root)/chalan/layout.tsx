import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const ChalanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Add Chalan', href: '/chalan/add' },
          { label: 'All Chalan', href: '/chalan' },
          { label: 'Chalan Delete History', href: '/chalan/delete' }
        ]}
      />

      {children}
    </div>
  )
}

export default ChalanLayout

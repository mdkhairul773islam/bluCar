import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const DueListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Party Due', href: '/due_list' },
          { label: 'Credit Due', href: '/due_list/credit' },
          { label: 'Supplier Due', href: '/due_list/supplier' }
        ]}
      />

      {children}
    </div>
  )
}

export default DueListLayout

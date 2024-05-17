import React from 'react'
import NavigationTabs from '@/components/shared/NavigationTabs'

const IncomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Field of Income', href: '/income/field' },
          { label: 'All Income', href: '/income' },
          { label: 'Delete Income', href: '/income/delete' }
        ]}
      />

      {children}
    </div>
  )
}

export default IncomeLayout

import NavigationTabs from '@/components/shared/NavigationTabs'
import type { ReactNode } from 'react';

const EmployeeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavigationTabs
        links={[
          { label: 'Add Employee', href: '/employee/add' },
          { label: 'All Employee', href: '/employee' },
          { label: 'Add Attendance', href: '/employee/attendance/add' },
          { label: 'All Attendance', href: '/employee/attendance' },
          { label: 'Add Salary', href: '/employee/salary/add' },
          { label: 'All Salary', href: '/employee/salary' },
          { label: 'All Advance Payment', href: '/employee/advance_payment' },
          { label: 'Add Payment', href: '/employee/payment/add' },
          { label: 'All Payment', href: '/employee/payment' },
          { label: 'Salary Report', href: '/employee/salary/report' }
        ]}
      />

      {children}
    </div>
  )
}

export default EmployeeLayout

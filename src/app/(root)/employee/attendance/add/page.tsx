import React from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import AddAttendanceTableForm from './_components/AddAttendanceTableForm'
import { ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Add New Attendance'
}

const AddAttendancePage = async () => {
  return (
    <>
      <ActiveMenu menu='employee' />

      {/* Panel Header */}
      <PanelHeader title='Add New Attendance'>
        <Link href='/employee/attendance'>
          <Button className='flex items-center gap-2 bg-brand'>
            <ListTodo className='size-4' />
            All Attendance
          </Button>
        </Link>
      </PanelHeader>

      <Card className='p-4'>
        {/* Add New Attendance  */}
        <AddAttendanceTableForm />
      </Card>
    </>
  )
}

export default AddAttendancePage

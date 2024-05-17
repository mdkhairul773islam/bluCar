import React from 'react'
import { Metadata } from 'next'
import { Employee, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CirclePlus, ListTodo } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Employee'
}

async function getData(): Promise<Employee[]> {
  return [
    {
      id: '1',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '2',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '3',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '4',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '5',
      showroom: 'bluemotors123',
      name: 'MD. ROBIN MIA (M03775)	',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '6',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Disabled'
    },
    {
      id: '7',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '8',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Disabled'
    },
    {
      id: '9',
      showroom: 'bluemotors123',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      name: 'MD. MAMUN KHAN (M03702)',
      mobile: '01770212118',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    },
    {
      id: '10',
      showroom: 'bluemotors123',
      name: 'MST AMBIA KHATUN[ HABIBULLH]	',
      joining_date: '2019-09-07',
      employee_id: '14324',
      image: '/images/profile.webp',
      mobile: '01780019578',
      designation: 'Marketer',
      basic_salary: 10000,
      status: 'Enabled'
    }
  ]
}

const EmployeePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='employee' />

      {/* Panel Header */}
      <PanelHeader title='All Employee'>
        <Link href='/employee/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add Employee
          </Button>
        </Link>
      </PanelHeader>

      {/* Employee Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default EmployeePage

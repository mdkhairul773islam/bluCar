import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Salary, columns } from './_components/columns'
import { CirclePlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Salary'
}

async function getData(): Promise<Salary[]> {
  return [
    {
      id: '1',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '2',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '3',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '4',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '5',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '6',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '7',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '8',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '9',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    },
    {
      id: '10',
      date: '2023-05-07',
      salary_month: '2023 January',
      employee_info: 'John Doe',
      basic: 5000,
      incentive: 4000,
      deduction: 2000,
      bonus_percentage: 20,
      bonus_tk: 2312,
      pre_balance: 234234,
      total_salary: 123123
    }
  ]
}

const SalaryPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='employee' />

      {/* Panel Header */}
      <PanelHeader title='All Salary'>
        <Link href='/employee/salary/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add Salary
          </Button>
        </Link>
      </PanelHeader>

      {/* Salary Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default SalaryPage

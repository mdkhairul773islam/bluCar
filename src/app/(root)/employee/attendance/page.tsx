import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'
import { Attendance, columns } from './_components/columns'
import { CirclePlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Attendance'
}

async function getData(): Promise<Attendance[]> {
  return [
    {
      id: '1',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    },
    {
      id: '2',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Absent'
    },
    {
      id: '3',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Leave'
    },
    {
      id: '4',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Holiday'
    },
    {
      id: '5',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    },
    {
      id: '6',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    },
    {
      id: '7',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    },
    {
      id: '8',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    },
    {
      id: '9',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    },
    {
      id: '10',
      date: '2023-05-07',
      showroom: 'M/S Blue Motors',
      name: 'MD. BAPPY MIA	',
      mobile: '01813121123',
      designation: 'SR.SALES ACCOUNTS EXECUTIVE	',
      start_time: '2023-05-07 01:00 PM',
      end_time: '2023-05-07 10:00 PM',
      status: 'Attend'
    }
  ]
}

const AttendancePage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='employee' />

      {/* Panel Header */}
      <PanelHeader title='All Attendance'>
        <Link href='/employee/attendance/add'>
          <Button className='flex items-center gap-2 bg-brand'>
            <CirclePlus className='size-4' />
            Add Attendance
          </Button>
        </Link>
      </PanelHeader>

      {/* Attendance Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default AttendancePage

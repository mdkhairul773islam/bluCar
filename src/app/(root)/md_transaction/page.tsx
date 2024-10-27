import React from 'react'
import { Metadata } from 'next'
import AddMdTransaction from './_components/AddMdTransaction'
import { MdTransaction, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Md Transaction'
}

async function getData(): Promise<MdTransaction[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '2',
      date: '2019-09-07	',
      trx_type: 'Withdraw',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '3',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '4',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '5',
      date: '2019-09-07	',
      trx_type: 'Withdraw',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '6',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '7',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '8',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '9',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '10',
      date: '2019-09-07	',
      trx_type: 'Withdraw',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    },
    {
      id: '11',
      date: '2019-09-07	',
      trx_type: 'Deposit',
      amount: 228745.0,
      godown_name: 'M/S BLUE MOTORS',
      remark: 'string',
      username: 'bluemotors123'
    }
  ]
}

const MdTransactionPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='mdTransaction' />

      {/* Panel Header */}
      <PanelHeader title='All Md Transaction'>
        <AddMdTransaction />
      </PanelHeader>

      {/* Md Transaction Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default MdTransactionPage

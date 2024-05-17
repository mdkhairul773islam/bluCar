import React from 'react'
import { Metadata } from 'next'
import AddAccount from './_components/AddAccount'
import { Account, columns } from './_components/columns'
import ActiveMenu from '@/components/shared/ActiveMenu'
import { DataTable } from '@/components/shared/DataTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'All Account'
}

async function getData(): Promise<Account[]> {
  return [
    {
      id: '1',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '2',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '3',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '4',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '5',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '6',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '7',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '8',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '9',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '10',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    },
    {
      id: '11',
      date: '2019-09-07	',
      bank_name: 'Mutual Trust Bank LTD',
      holder_name: 'bluemotors123',
      account_number: '0210009264',
      initial_balance: 113067,
      current_balance: 12720
    }
  ]
}

const AccountPage = async () => {
  const data = await getData()

  return (
    <>
      <ActiveMenu menu='bank' />

      {/* Panel Header */}
      <PanelHeader title='All Account'>
        <AddAccount />
      </PanelHeader>

      {/* Account Table */}
      <DataTable data={data} columns={columns} />
    </>
  )
}

export default AccountPage

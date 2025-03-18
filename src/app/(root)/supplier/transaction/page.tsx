import { Metadata } from 'next'
import PanelHeader from '@/components/shared/PanelHeader'
import AddTransaction from './_components/AddTransaction'
import ActiveMenu from '@/components/shared/ActiveMenu'
import TransactionTable from './_components/TransactionTable'

export const metadata: Metadata = {
  title: 'All Transaction'
}

// Get suppliers action
const getSuppliers = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/suppliers`)

    const data = await response.json()

    return data
  } catch (error) {
    return 'An error has occurred'
  }
}

// Get showrooms action
const getShowrooms = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/showrooms`)

    const data = await response.json()

    return data
  } catch (error) {
    return 'An error has occurred'
  }
}

const TransactionPage = async () => {
  'use server'

  let suppliers = await getSuppliers()
  let showrooms = await getShowrooms()

  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='All Transaction'>
        <AddTransaction suppliers={suppliers} showrooms={showrooms} />
      </PanelHeader>

      <TransactionTable />
    </>
  )
}

export default TransactionPage

import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SupplierDetail from './_components/TransactionDetail'

export const metadata: Metadata = {
  title: 'Show Transaction'
}

const TransactionShowPage = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <ActiveMenu menu='supplier' />

      <SupplierDetail transactionId={params.id} />
    </>
  )
}

export default TransactionShowPage

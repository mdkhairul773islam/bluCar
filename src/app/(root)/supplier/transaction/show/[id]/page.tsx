import { Metadata } from 'next'
import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import SupplierDetail from './_components/TransactionDetail'

export const metadata: Metadata = {
  title: 'Show Transaction'
}

const TransactionShowPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  return (
    <>
      <ActiveMenu menu='supplier' />

      <SupplierDetail transactionId={params.id} />
    </>
  )
}

export default TransactionShowPage

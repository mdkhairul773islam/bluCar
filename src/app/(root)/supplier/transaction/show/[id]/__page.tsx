import ActiveMenu from '@/components/shared/ActiveMenu'
import { Metadata } from 'next'
import SupplierDetail from './_components/TransactionDetail'

export const metadata: Metadata = {
  title: 'Show Transaction'
}

const TransactionShowPage = async ({
  params
}: {
  params: { id: string | undefined }
}) => {
  return (
    <>
      <ActiveMenu menu='supplier' />

      <SupplierDetail transactionId={params?.id} />
    </>
  )
}

export default TransactionShowPage

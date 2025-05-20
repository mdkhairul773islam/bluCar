import ActiveMenu from '@/components/shared/ActiveMenu'
import { Metadata } from 'next'
import SupplierDetail from './_components/TransactionDetail'

export const metadata: Metadata = {
  title: 'Show Transaction'
}

type TPageParams = Promise<{
  id: string | undefined
}>

const TransactionShowPage = async ({ params }: { params: TPageParams }) => {
  const paramsRes = await params

  return (
    <>
      <ActiveMenu menu='supplier' />

      <SupplierDetail transactionId={paramsRes?.id} />
    </>
  )
}

export default TransactionShowPage

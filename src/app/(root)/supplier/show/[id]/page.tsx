import ActiveMenu from '@/components/shared/ActiveMenu'
import PanelHeader from '@/components/shared/PanelHeader'
import { Metadata } from 'next'
import SupplierDetail from './_components/SupplierDetail'

export const metadata: Metadata = {
  title: 'Show Supplier'
}

type TPageParams = Promise<{
  id: string | undefined
}>

const SupplierShowPage = async ({ params }: { params: TPageParams }) => {
  const paramsRes = await params

  return (
    <>
      <ActiveMenu menu='supplier' />

      {/* Panel Header */}
      <PanelHeader title='Supplier Details' />

      <SupplierDetail supplierId={paramsRes?.id} />
    </>
  )
}

export default SupplierShowPage

import { Metadata } from 'next'
import AddCategory from './_components/AddCategory'
import ActiveMenu from '@/components/shared/ActiveMenu'
import CategoryTable from './_components/CategoryTable'
import PanelHeader from '@/components/shared/PanelHeader'

export const metadata: Metadata = {
  title: 'Category'
}

const CategoryPage = async () => {
  return (
    <>
      <ActiveMenu menu='category' />

      {/* Panel Header */}
      <PanelHeader title='Category'>
        <AddCategory />
      </PanelHeader>

      {/* Category Table */}
      <CategoryTable />
    </>
  )
}

export default CategoryPage

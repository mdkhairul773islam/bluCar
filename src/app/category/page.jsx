import Panel from "@/components/common/Panel";
import CategoryFilter from "@/components/category/CategoryFilter";
import CategoryTable from "@/components/category/CategoryTable";

export const metadata = {
  title: "Category",
};

const CategoryPage = () => {
  return (
    <>
      <Panel title="All Category">
        <CategoryFilter />
        <CategoryTable />
      </Panel>
    </>
  );
};

export default CategoryPage;

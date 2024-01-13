import Panel from "@/components/common/Panel";
import SupplierFilter from "@/components/supplier/SupplierFilter";
import SupplierTable from "@/components/supplier/SupplierTable";

export const metadata = {
  title: "Supplier",
};

const SupplierPage = () => {
  return (
    <>
      <Panel title="All Supplier">
        <SupplierFilter />
        <SupplierTable />
      </Panel>
    </>
  );
};

export default SupplierPage;

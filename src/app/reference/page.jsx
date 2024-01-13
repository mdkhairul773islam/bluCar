import Panel from "@/components/common/Panel";
import ReferenceFilter from "@/components/reference/ReferenceFilter";
import ReferenceTable from "@/components/reference/ReferenceTable";

export const metadata = {
  title: "Reference",
};

const ReferencePage = () => {
  return (
    <>
      <Panel title="All Reference">
        <ReferenceFilter />
        <ReferenceTable />
      </Panel>
    </>
  );
};

export default ReferencePage;

import Panel from "@/components/common/Panel";
import DashBoxItems from "@/components/dashboard/DashBoxItems";
import InstallmentTable from "@/components/dashboard/InstallmentTable";

export const metadata = {
  title: "Dashboard - Green Pos",
};

const DashboardPage = () => {
  return (
    <div>
      <Panel title="Welcome to Blue Car Dashboard">
        {/* Dahboard Box Items */}
        <DashBoxItems />

        {/* Installment List Table */}
        <div className="mt-10">
          <InstallmentTable />
        </div>
      </Panel>
    </div>
  );
};

export default DashboardPage;

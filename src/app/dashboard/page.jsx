import Panel from "@/components/common/Panel";
import DashBoxItems from "@/components/dashboard/DashBoxItems";

export const metadata = {
  title: "Dashboard - Green Pos",
};

const DashboardPage = () => {
  return (
    <div>
      <Panel title="Welcome to Blue Car Dashboard">
        <DashBoxItems />
      </Panel>
    </div>
  );
};

export default DashboardPage;

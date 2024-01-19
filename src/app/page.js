// Import Dependencies
import DashBoxItems from "@/components/dashboard/DashBoxItems";
import InstallmentTable from "@/components/dashboard/InstallmentTable";

// Meta Data
export const metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div>
      {/* Dashboard Item  */}
      <DashBoxItems />

      {/* Installment Table  */}
      <div className="bg-white shadow-md rounded my-5 p-5">
        <h3 className="text-xl font-semibold tracking-wider text-dark-800 mb-5">
          Installment List
        </h3>
        <InstallmentTable />
      </div>
    </div>
  );
};

export default DashboardPage;

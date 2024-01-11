import Panel from "@/components/common/Panel";
import Table from "@/components/common/table/Table";
import TableTd from "@/components/common/table/TableTd";
import TableTh from "@/components/common/table/TableTh";
import TableTr from "@/components/common/table/TableTr";
import Tbody from "@/components/common/table/Tbody";
import Thead from "@/components/common/table/Thead";
import DashBoxItems from "@/components/dashboard/DashBoxItems";

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
          <Table>
            <Thead>
              <TableTh extraClass="text-center">SL</TableTh>
              <TableTh>Name</TableTh>
              <TableTh>Mobile</TableTh>
              <TableTh>Address</TableTh>
              <TableTh>Total Bill </TableTh>
              <TableTh>Installment Date </TableTh>
              <TableTh>Installment Amount</TableTh>
            </Thead>
            <Tbody>
              {[
                {
                  name: "Mehedi Hasan",
                  mobile: "01783924274",
                  address: "Dhanikhola, Trishal, Mymensingh",
                  total_bill: 716000,
                  installment_date: "01-16-24",
                  installment_amount: "43000",
                },
                {
                  name: "Mehedi Hasan",
                  mobile: "01783924274",
                  address: "Dhanikhola, Trishal, Mymensingh",
                  total_bill: 716000,
                  installment_date: "01-16-24",
                  installment_amount: "43000",
                },
                {
                  name: "Mehedi Hasan",
                  mobile: "01783924274",
                  address: "Dhanikhola, Trishal, Mymensingh",
                  total_bill: 716000,
                  installment_date: "01-16-24",
                  installment_amount: "43000",
                },
                {
                  name: "Mehedi Hasan",
                  mobile: "01783924274",
                  address: "Dhanikhola, Trishal, Mymensingh",
                  total_bill: 716000,
                  installment_date: "01-16-24",
                  installment_amount: "43000",
                },
                {
                  name: "Mehedi Hasan",
                  mobile: "01783924274",
                  address: "Dhanikhola, Trishal, Mymensingh",
                  total_bill: 716000,
                  installment_date: "01-16-24",
                  installment_amount: "43000",
                },
              ].map(
                (
                  {
                    name,
                    mobile,
                    address,
                    total_bill,
                    installment_date,
                    installment_amount,
                  },
                  index
                ) => (
                  <TableTr key={index}>
                    <TableTd extraClass="text-center">{index + 1}</TableTd>
                    <TableTd extraClass="whitespace-nowrap">{name}</TableTd>
                    <TableTd>{mobile}</TableTd>
                    <TableTd>{address}</TableTd>
                    <TableTd>{total_bill}</TableTd>
                    <TableTd>{installment_date}</TableTd>
                    <TableTd>{installment_amount}</TableTd>
                  </TableTr>
                )
              )}
              <TableTr>
                <TableTd colSpan="6" extraClass="text-right font-bold">
                  Total
                </TableTd>
                <TableTd colSpan="6" extraClass="font-bold ">
                  5454515
                </TableTd>
              </TableTr>
            </Tbody>
          </Table>
        </div>
      </Panel>
    </div>
  );
};

export default DashboardPage;

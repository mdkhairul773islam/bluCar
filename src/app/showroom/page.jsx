import Panel from "@/components/common/Panel";
import ShowroomFilter from "@/components/showroom/ShowroomFilter";
import ShowroomTable from "@/components/showroom/ShowroomTable";

export const metadata = {
  title: "Showroom",
};

const ShowroomPage = () => {
  return (
    <>
      <Panel title="All Showroom">
        <ShowroomFilter />
        <ShowroomTable />
      </Panel>
    </>
  );
};

export default ShowroomPage;

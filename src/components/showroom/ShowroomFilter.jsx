import { IoSearchOutline } from "react-icons/io5";

const ShowroomFilter = () => {
  return (
    <div className="mb-10 max-w-sm relative">
      <input
        type="text"
        className="pl-10 inputField"
        placeholder="Search here..."
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-xl text-gray-400">
        <IoSearchOutline />
      </span>
    </div>
  );
};

export default ShowroomFilter;

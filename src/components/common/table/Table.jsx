const Table = ({ children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
        {children}
      </table>
    </div>
  );
};

export default Table;

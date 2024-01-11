const TableTr = ({ extraClass, children }) => {
  return (
    <tr
      className={`bg-white border border-light-gray hover:bg-gray-50 ${
        extraClass || ""
      }`}
    >
      {children}
    </tr>
  );
};

export default TableTr;

const TableTd = ({ extraClass, children, ...props }) => {
  return (
    <td
      {...props}
      className={`px-3 py-2 border border-light-gray ${extraClass || ""}`}
    >
      {children}
    </td>
  );
};

export default TableTd;

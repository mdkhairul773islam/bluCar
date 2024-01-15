"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import { Tooltip } from "flowbite-react";
import { LiaEdit } from "react-icons/lia";
import referenceData from "./referenceData.json";
import React, { useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import ReferenceEditModal from "./ReferenceEditModal";
import { GoSortAsc, GoSortDesc, GoTrash } from "react-icons/go";
import ReferenceFilter from "./ReferenceFilter";

const ReferenceTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => referenceData, []);
  const [openModal, setOpenModal] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <ReferenceFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index.toString()} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index.toString()}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-2xl">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <GoSortAsc />
                          ) : (
                            <GoSortDesc />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
                <th className="text-right">Action</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr key={index.toString} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index.toString()} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}

                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <Tooltip content="Update" animation="duration-500">
                        <div
                          onClick={() => setOpenModal(true)}
                          className="h-7 w-7 bg-emerald-600/20 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded text-xs flex items-center justify-center cursor-pointer"
                        >
                          <LiaEdit />
                        </div>
                      </Tooltip>

                      <Tooltip content="Delete" animation="duration-500">
                        <div className="h-7 w-7 bg-red-600/20 text-red-600 hover:bg-red-600 hover:text-white rounded text-xs flex items-center justify-center cursor-pointer">
                          <GoTrash />
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Edit Reference Modal */}
        <ReferenceEditModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </>
  );
};

export default ReferenceTable;

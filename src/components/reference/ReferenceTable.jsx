"use client";
// Import Dependencies
import { COLUMNS } from "./columns";
import { Tooltip } from "flowbite-react";
import { LiaEdit } from "react-icons/lia";
import referenceData from "./referenceData.json";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import ReferenceFilter from "./ReferenceFilter";
import ReferenceEditModal from "./ReferenceEditModal";
import ReferencePagination from "./ReferencePagination";
import { GoSortAsc, GoSortDesc, GoTrash } from "react-icons/go";

const ReferenceTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => referenceData, []);
  const [openModal, setOpenModal] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      {/* Reference Filter */}
      <ReferenceFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Reference Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      key={index}
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
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}

                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <Tooltip content="Update" animation="duration-500">
                        <div
                          onClick={() => {
                            setOpenModal(true);
                          }}
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

      {/* Reference Pagination */}
      <ReferencePagination
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default ReferenceTable;

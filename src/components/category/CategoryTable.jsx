"use client";
// Import Dependencies
import { Table } from "flowbite-react";
import CategoryTableTr from "./CategoryTableTr";

const CategoryTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="!px-2">SL</Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            Category Name
          </Table.HeadCell>
          <Table.HeadCell className="!px-2 text-end">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y  divide-dashed">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <CategoryTableTr key={i.toString()} category={i} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CategoryTable;

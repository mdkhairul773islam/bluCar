"use client";
// Import Dependencies
import { Table } from "flowbite-react";
import ReferenceTableTr from "./ReferenceTableTr";

const ReferenceTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="!px-2">SL</Table.HeadCell>
          <Table.HeadCell className="!px-3 whitespace-nowrap">
            Name
          </Table.HeadCell>
          <Table.HeadCell className="!px-2 whitespace-nowrap">
            Mobile
          </Table.HeadCell>
          <Table.HeadCell className="!px-2">Address</Table.HeadCell>
          <Table.HeadCell className="!px-2 whitespace-nowrap">
            Area
          </Table.HeadCell>
          <Table.HeadCell className="!px-2 text-end">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y  divide-dashed">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <ReferenceTableTr key={i.toString()} user={i} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ReferenceTable;

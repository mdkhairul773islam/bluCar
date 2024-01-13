"use client";
// Import Dependencies
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { Table, Tooltip } from "flowbite-react";
import CategoryEditModal from "./CategoryEditModal";

const CategoryTableTr = ({ category }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Table.Row className="bg-white ">
        <Table.Cell className="!px-2">{category}</Table.Cell>
        <Table.Cell className="!px-3">
          <span className="whitespace-nowrap font-medium text-gray-900">
            AC Pump
          </span>
        </Table.Cell>
        <Table.Cell className="!px-2">
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
        </Table.Cell>
      </Table.Row>

      {/* Edit Category Modal */}
      <CategoryEditModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default CategoryTableTr;

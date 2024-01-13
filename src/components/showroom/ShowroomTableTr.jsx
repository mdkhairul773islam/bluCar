"use client";
// Import Dependencies
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { Table, Tooltip } from "flowbite-react";
import ShowroomEditModal from "./ShowroomEditModal";

const ShowroomTableTr = ({ showroom }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Table.Row className="bg-white ">
        <Table.Cell className="!px-2">{showroom}</Table.Cell>
        <Table.Cell className="!px-3 whitespace-nowrap font-medium text-gray-900">
          Mehedi Hasan Rahat
        </Table.Cell>
        <Table.Cell className="!px-2 whitespace-nowrap">Rahat</Table.Cell>
        <Table.Cell className="!px-2">01726476303</Table.Cell>
        <Table.Cell className="!px-2">01743068304</Table.Cell>
        <Table.Cell className="!px-2">01726476303</Table.Cell>
        <Table.Cell className="!px-2">Trishal, Mymensingh</Table.Cell>
        <Table.Cell className="!px-2 whitespace-nowrap">SM-1</Table.Cell>
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
          </div>
        </Table.Cell>
      </Table.Row>

      {/* Edit Showroom Modal */}
      <ShowroomEditModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ShowroomTableTr;

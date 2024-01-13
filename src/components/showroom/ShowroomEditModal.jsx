// Import Dependencies
import { Modal } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";
import EditShowroomForm from "./EditShowroomForm";

const ShowroomEditModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      size="2xl"
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className="p-5 flex bg-white rounded flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-tertiary text-lg font-medium">
            Edit Showroom
          </span>
          <div
            onClick={() => setOpenModal(false)}
            className="flex items-center justify-center h-6 w-6 hover:bg-gray-100 cursor-pointer hover:text-red-600 rounded-full"
          >
            <RxCross2 />
          </div>
        </div>

        {/* Edit Showroom Form */}
        <EditShowroomForm setOpenModal={setOpenModal} />
      </div>
    </Modal>
  );
};

export default ShowroomEditModal;

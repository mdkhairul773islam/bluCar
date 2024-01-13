import { FaBarsStaggered } from "react-icons/fa6";
import HeaderProfile from "./HeaderProfile";
import Notification from "./Notification";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" bg-dark-purple text-white h-[65px] flex items-center justify-between pr-5">
      <div className="bg-white text-primary p-2 rounded-sm text-xl cursor-pointer">
        <FaBarsStaggered />
      </div>
      <div className="flex items-center gap-4 h-full">
        <div className="h-12 w-12 flex items-center justify-center rounded-full hover:bg-primary/10 duration-500 hover:rotate-[360deg] cursor-pointer">
          <IoSettingsOutline className="text-2xl" />
        </div>

        <Notification />
        <HeaderProfile />
      </div>
    </div>
  );
};

export default Header;

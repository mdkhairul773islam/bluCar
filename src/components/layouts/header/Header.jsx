import Notification from "./Notification";
import HeaderProfile from "./HeaderProfile";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-white text-black shadow-md rounded px-5 py-3 flex items-center justify-between">
      <div>
        <h4 className="text-dark-800 text-xl font-bold tracking-wider">
          Point of Sale
        </h4>
        <p className="text-dark-500 text-xs">Manage your purchase</p>
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

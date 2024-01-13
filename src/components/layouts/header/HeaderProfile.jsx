"use client";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Image from "next/image";
import { AiOutlineFundView } from "react-icons/ai";
import { IoCaretDown } from "react-icons/io5";

const HeaderProfile = ({ image }) => {
  return (
    <>
      <Dropdown
        label=""
        renderTrigger={() => (
          <div className="h-12 w-12 p-1 pr-3 md:w-fit bg-primary rounded-[10px] flex items-center gap-2  shadow-sm justify-center cursor-pointer">
            <Image
              height={48}
              width={48}
              src="/images/mehedi.jpg"
              alt="User"
              className="h-full w-full rounded-md object-contain "
            />
            <span className="font-medium text-white whitespace-nowrap hidden tracking-wider md:block">
              Mehedi Hasan
            </span>
            <IoCaretDown />
          </div>
        )}
      >
        <Dropdown.Header>
          <span className="block text-sm">Mehedi Hasan</span>
          <span className="block truncate text-sm font-medium">
            mehedi@devzet.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item href="/admin" icon={HiViewGrid}>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
        <Dropdown.Item href="/" icon={AiOutlineFundView}>
          Frontend
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/" icon={HiLogout}>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default HeaderProfile;

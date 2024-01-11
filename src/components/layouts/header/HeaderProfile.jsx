"use client";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Image from "next/image";
import { AiOutlineFundView } from "react-icons/ai";

const HeaderProfile = ({ image }) => {
  return (
    <>
      <Dropdown
        label=""
        renderTrigger={() => (
          <div className="h-12 w-12 bg-white text-primary rounded-full flex items-center justify-center cursor-pointer">
            {image ? (
              <Image
                height={48}
                width={48}
                src={`${image}`}
                alt="User"
                className="h-full w-full rounded-full object-contain border shadow-sm"
              />
            ) : (
              "M"
            )}
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

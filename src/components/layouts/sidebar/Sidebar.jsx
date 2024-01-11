"use client";

import Link from "next/link";
import { useState } from "react";
import sidebarData from "./sidebarData";
import { IoLogoModelS } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subnav, setSubnav] = useState({
    open: false,
    index: null,
  });

  const showSubnav = (index) =>
    setSubnav({
      open: !subnav.open,
      index: index,
    });

  return (
    <div
      className={` ${
        open ? "w-72" : ""
      } bg-dark-purple h-screen fixed p-5  duration-300 overflow-y-auto`}
    >
      <Link
        href={"/dashboard"}
        className="flex gap-x-4 items-center border-b border-b-primary/30 pb-3"
      >
        <div
          className={`bg-primary p-2 rounded text-white ${
            open && "rotate-[360deg]"
          }`}
        >
          <IoLogoModelS />
        </div>
        <span className={`text-white font-bold text-xl duration-200`}>
          BlueCar
        </span>
      </Link>

      <ul className="mt-4 space-y-1">
        {sidebarData.map((menu, index) => (
          <li key={index}>
            <Link
              onClick={() => showSubnav(index)}
              href={`${menu.submenu ? "#" : menu.slug} `}
              className={`flex relative rounded-md p-2 cursor-pointer hover:bg-primary text-white items-center gap-x-4
               ${subnav.open && subnav.index === index && "bg-primary"} `}
            >
              {menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
              {menu.submenu && (
                <RiArrowDownSLine
                  className={`absolute right-3 ${
                    subnav.open && subnav.index === index && "rotate-180"
                  }`}
                />
              )}
            </Link>

            <ul className={`duration-500 ml-2 text-gray-200`}>
              {subnav.open &&
                subnav.index === index &&
                menu.submenu?.map((smenu, index) => (
                  <li key={index}>
                    <Link
                      href={smenu.slug}
                      className="p-2 hover:text-primary flex  items-center gap-2"
                    >
                      <IoMdArrowDropright />
                      {smenu.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

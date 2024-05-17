"use client";

import { useSidebarStore } from "@/store/sidebar-menu";
import { useEffect } from "react";

const ActiveMenu = ({ menu }: { menu: string }) => {
  const { setActiveMenu } = useSidebarStore();

  useEffect(() => {
    setActiveMenu(menu);
  }, [menu, setActiveMenu]);

  return null;
};

export default ActiveMenu;

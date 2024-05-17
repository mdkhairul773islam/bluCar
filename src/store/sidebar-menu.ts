import { create } from "zustand";

interface SidebarState {
  isCollapsed: boolean;
  isMobileMenuOpen: boolean;
  activeMenu: string;
  collapseSidebar: () => void;
  toggleMobileSidebar: () => void;
  setActiveMenu: (menu: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isCollapsed: false,
  isMobileMenuOpen: false,
  activeMenu: "",
  collapseSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  toggleMobileSidebar: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setActiveMenu: (menu) => set({ activeMenu: menu }),
}));

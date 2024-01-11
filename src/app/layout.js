import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layouts/sidebar/Sidebar";
import Header from "@/components/layouts/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Pos",
  description: "Green Pos is an POS Application create by NEXT JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          {/* Sidebar Area */}
          <SideBar />

          <div className="ml-72 h-screen  ">
            <Header />
            <main className="p-7">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

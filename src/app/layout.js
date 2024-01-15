import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layouts/sidebar/Sidebar";
import Header from "@/components/layouts/header/Header";
import ProgressProvider from "@/providers/ProgressProvider";
import Footer from "@/components/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blue Car",
    template: "%s - Blue Car",
  },
  description: "Blue Car is an POS Application create by NEXT JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          {/* Sidebar Area */}
          <SideBar />

          <div className="p-5 ml-72 ">
            {/* Header Area */}
            <Header />

            {/* Main Area */}
            <main>
              <ProgressProvider>{children}</ProgressProvider>
            </main>

            {/* Footer Area */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

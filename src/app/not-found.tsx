import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "😔 Page not found!",
};

const NotFound = () => {
  return (
    <div className="text-2xl font-medium w-full h-[calc(100vh-100px)] flex items-center justify-center">
      😔 Opps! Page not found
    </div>
  );
};

export default NotFound;

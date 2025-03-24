"use client";
import React from "react";
import Header from "../../Components/GalleryComponents/Header";
import Sidebar from "../../Components/GalleryComponents/SideBar";

import MobileHeader from "@/app/Components/MobileHeader";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="dark:bg-gray-800">
      <div className="md:py-0 mb-28 md:mb-0 flex flex-col">
        <Header />
        <MobileHeader />
      </div>
      <div className=" md:ml-10 md:mr-64 flex md:flex-row">
        <Sidebar />
        <div className=" flex justify-center md:w-full">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

"use client";
import React from "react";
import Header from "../../Components/GalleryComponents/Header";
import Sidebar from "../../Components/GalleryComponents/SideBar";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="dark:bg-gray-800">
      <div className=" py-10 md:py-0 flex flex-col">
        <div className="flex"></div>
        <Header />
      </div>
      <div className=" md:ml-10 md:mr-64 flex md:flex-row">
        <Sidebar />
        <div className=" flex justify-center md:w-full">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

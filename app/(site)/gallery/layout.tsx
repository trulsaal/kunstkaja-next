"use client";
import React, { useState } from "react";
import Header from "../../Components/GalleryComponents/Header";
import Sidebar from "../../Components/GalleryComponents/SideBar";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="px-10 py-10 md:py-0 flex flex-col">
        <div className="flex"></div>

        <Header />
      </div>
      <div className="mx-10 flex md:flex-row">
        <Sidebar />
        <div className="flex justify-center w-full">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

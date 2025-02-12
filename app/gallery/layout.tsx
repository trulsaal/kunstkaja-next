import React from "react";
import Header from "../Components/GalleryComponents/Header";
import Sidebar from "../Components/GalleryComponents/SideBar";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="outline outline-2 outline-gray-400 w-lvw flex  flex-col">
        <div className="flex">
          <Header />
        </div>
        <div className="flex flex-row">
          <Sidebar />

          <div className="px-24 py-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

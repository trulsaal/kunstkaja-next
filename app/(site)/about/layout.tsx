import React from "react";
import Header from "../../Components/GalleryComponents/Header";
import Sidebar from "../../Components/GalleryComponents/SideBar";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className=" px-10 flex flex-col">
        <div className=" flex">
          <Header />
        </div>
        <div className="flex flex-row ">
          <Sidebar />
          <div className="flex justify-center w-full">
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

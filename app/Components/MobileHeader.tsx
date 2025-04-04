import { FiMenu } from "react-icons/fi";
import DropDownMenu from "./DropDownMenu/DropDown";
import DropDownContent from "./DropDownMenu/DropDownContent";
import { useState } from "react";
import Link from "next/link";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="md:hidden dark:bg-slate-800 fixed top-0 h-20 w-full align-middle bg-white">
      <div className="z-10 flex p-4 items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl text-slate-700 dark:text-slate-100">
            <strong>kunst</strong>Kaja
          </h1>
        </Link>

        <div>
          <FiMenu
            onClick={handleClick}
            className="text-4xl text-slate-700 dark:text-slate-100 cursor-pointer"
          />
        </div>
      </div>

      <div className="right-0 -z-10 absolute ">
        {!isOpen ? (
          <div className="absolute mt-auto -translate-y-64 overflow-hidden">
            <DropDownMenu>
              <DropDownContent></DropDownContent>
            </DropDownMenu>
          </div>
        ) : (
          <div className="mt-auto translate-y-0 transition-all duration-500">
            <DropDownMenu>
              <DropDownContent></DropDownContent>
            </DropDownMenu>
          </div>
        )}
      </div>
    </div>
  );
}

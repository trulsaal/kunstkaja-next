import { FiMenu } from "react-icons/fi";
import DropDownMenu from "./DropDownMenu/DropDown";
import DropDownContent from "./DropDownMenu/DropDownContent";
import { useState } from "react";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="md:hidden dark:bg-slate-800 relative h-24 align-middle bg-transparent flex flex-col ">
      <div className="z-10 flex p-4 items-center justify-between">
        <h1 className="text-4xl">
          <strong>kunst</strong>Kaja
        </h1>
        <div>
          <FiMenu onClick={handleClick} className="text-4xl cursor-pointer" />
        </div>
      </div>

      <div className="">
        {isOpen ? (
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

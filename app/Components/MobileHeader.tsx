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
    <div className="md:hidden dark:bg-slate-700 fixed top-0 h-20 w-full align-middle bg-transparent">
      <div className="z-10 flex p-4 items-center justify-between">
        <h1 className="text-4xl">
          <strong>kunst</strong>Kaja
        </h1>
        <div>
          <FiMenu onClick={handleClick} className="text-4xl cursor-pointer" />
        </div>
      </div>

      <div className="right-0 -z-10 absolute ">
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

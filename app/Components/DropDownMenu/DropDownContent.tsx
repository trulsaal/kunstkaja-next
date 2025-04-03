import SidebarBtn from "../Buttons/SidebarBtn";
import ThemeSwitch from "../ThemeSwitch";

export default function DropDownContent() {
  return (
    <ul className=" w-fit h-fit flex flex-col p-4 gap-2 text-lg text-slate-700 dark:text-slate-100 ">
      <SidebarBtn to="/gallery">til salgs</SidebarBtn>
      <SidebarBtn to="/portfolio">portefølje</SidebarBtn>
      <SidebarBtn to="/about">om</SidebarBtn>
      <ThemeSwitch />
    </ul>
  );
}

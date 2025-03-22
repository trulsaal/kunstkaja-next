import SidebarBtn from "../Buttons/SidebarBtn";
import SoMeIcons from "../SoMeIcons";

export default function Sidebar() {
  return (
    <div className="dark:text-slate-100 text-slate-700 w-56 h-fit sticky top-24 hidden md:grid grid-col gap-1 text-left">
      <SidebarBtn to="/gallery">til salgs</SidebarBtn>
      <SidebarBtn to="/portfolio">portefølje</SidebarBtn>
      <SidebarBtn to="/about">om</SidebarBtn>
      <div className="mt-64">
        <SoMeIcons />
      </div>
    </div>
  );
}

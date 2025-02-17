import SidebarBtn from "../Buttons/SidebarBtn";

export default function Sidebar() {
  return (
    <div className="w-56 h-fit sticky top-24 hidden md:grid grid-col gap-1 text-left">
      <SidebarBtn to="/gallery">til salgs</SidebarBtn>
      <SidebarBtn to="/portfolio">portefølje</SidebarBtn>
      <SidebarBtn to="/about">om</SidebarBtn>
      <SidebarBtn to="/">hjem</SidebarBtn>
    </div>
  );
}

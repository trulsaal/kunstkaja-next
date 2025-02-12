import MenuBtn from "../Buttons/MenuBtn";

export default function Sidebar() {
  return (
    <div className="w-28 h-lvh outline flex flex-col items-center gap-1 py-10">
      <MenuBtn to="/">til salgs</MenuBtn>
      <MenuBtn to="/">portefølje</MenuBtn>
      <MenuBtn to="/">om</MenuBtn>
      <MenuBtn to="/">hjem</MenuBtn>
    </div>
  );
}

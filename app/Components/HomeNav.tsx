import MenuBtn from "./Buttons/MenuBtn";

export default function HomeNav() {
  return (
    <div className=" w-[800px] flex flex-col items-center justify-center gap-10 mt-auto h-2/3">
      <h1 className=" flex text-center text-8xl tracking-tighter">kunstkaja</h1>
      <div className="w-fit  flex flex-row gap-10">
        <MenuBtn to="">til salgs</MenuBtn>
        <MenuBtn to="">portefølje</MenuBtn>
        <MenuBtn to="">om</MenuBtn>
        <MenuBtn to="">kontakt</MenuBtn>
      </div>
      <div className="mt-auto mb-24">Icons</div>
    </div>
  );
}

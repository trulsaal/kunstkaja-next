import MenuBtn from "./Buttons/MenuBtn";

export default function HomeNav() {
  return (
    <div className=" w-[800px] flex flex-col items-center justify-center gap-10 mt-auto h-3/4">
      <h1 className=" flex text-center text-[10rem] tracking-tighter text-slate-700">
        <strong>kunst</strong>kaja
      </h1>
      <div className="w-fit  flex flex-row gap-5">
        <MenuBtn to="/gallery">til salgs</MenuBtn>
        <MenuBtn to="/portfolio">portefølje</MenuBtn>
        <MenuBtn to="/about">om</MenuBtn>
        <MenuBtn to="">kontakt</MenuBtn>
      </div>
      <div className="mt-auto mb-24">Icons</div>
    </div>
  );
}

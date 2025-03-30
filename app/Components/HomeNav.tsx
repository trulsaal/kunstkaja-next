import MenuBtn from "./Buttons/MenuBtn";

import SoMeIcons from "./SoMeIcons";

export default function HomeNav() {
  return (
    <div className="w-96 opacity-95 h-[44rem] md:w-lvw flex flex-col m-auto items-center justify-center md:h-lvh">
      <div className="flex flex-col gap-16 md:gap-10  my-auto">
        <div className="md:mb-16">
          <h1 className="flex text-left  md:text-[10rem] text-7xl tracking-tighter  text-slate-100">
            <strong> kunst</strong>kaja
          </h1>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pb-48 px-24">
        <div className="  text-slate-950 font-bold w-fit justify-center flex flex-col gap-3 md:gap-5  text-2xl">
          <MenuBtn to="/gallery">til salgs</MenuBtn>
          <MenuBtn to="/portfolio">portefølje</MenuBtn>
          <MenuBtn to="/about">om</MenuBtn>
          <div>
            <SoMeIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

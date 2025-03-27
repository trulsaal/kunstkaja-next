import MenuBtn from "./Buttons/MenuBtn";

import SoMeIcons from "./SoMeIcons";

export default function HomeNav() {
  return (
    <div className="w-96 md:w-[800px] flex flex-col m-auto items-center justify-center gap-5 md:gap-10 md:h-3/4">
      <div>
        <p className=" text-center md:text-left text-3xl m-0  text-slate-700">
          this is
        </p>
        <h1 className="flex text-left  leading-[50px] md:leading-[100px] m-0 md:text-[10rem] text-7xl tracking-tighter text-slate-700 dark:text-slate-100">
          <strong> kunst</strong>kaja
        </h1>
      </div>

      <div className=" dark:text-slate-100 text-slate-700 my-10 w-fit flex flex-col md:flex-row gap-3 md:gap-5">
        <MenuBtn to="/gallery">til salgs</MenuBtn>
        <MenuBtn to="/portfolio">portefølje</MenuBtn>
        <MenuBtn to="/about">om</MenuBtn>
      </div>
      <SoMeIcons />
    </div>
  );
}

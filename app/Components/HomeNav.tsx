import MenuBtn from "./Buttons/MenuBtn";

import SoMeIcons from "./SoMeIcons";

export default function HomeNav() {
  return (
    <div className=" w-96 h-svh md:w-lvw flex flex-col m-auto items-center justify-center md:h-lvh gap-20 md:gap-0">
      <div className=" flex w-full flex-col gap-0 md:gap-0 md:h-fit mt-auto justify-center items-center">
        <h1 className="flex w-fit text-center md:text-[12rem] font-normal text-7xl md:leading-[130px] text-white md:m-0 md:p-0">
          kunstkaja
        </h1>
        <div>
          <p className="flex w-full text-4xl md:text-8xl text-white opacity-60 leading-[10px] md:leading-[100px] font-light text-left m-0 p-0">
            kaja andrea krøvel
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between md:pb-32 px-24 mb-24 md:mb-0 h-fit">
        <div className="text-slate-100  md:text-slate-950 font-bold w-full md:w-fit h-96 justify-center flex flex-col gap-5 text-2xl md:pt-44">
          <MenuBtn to="/gallery">til salgs</MenuBtn>
          <MenuBtn to="/portfolio">portefølje</MenuBtn>
          <MenuBtn to="/about">om</MenuBtn>
          <div className="flex w-full mt-auto justify-center text-slate-700 md:block md:m-0 ">
            <SoMeIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

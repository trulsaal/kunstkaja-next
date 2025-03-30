import MenuBtn from "./Buttons/MenuBtn";

import SoMeIcons from "./SoMeIcons";

export default function HomeNav() {
  return (
    <div className="w-96 h-[44rem] md:w-lvw flex flex-col m-auto items-center justify-center md:h-lvh ">
      <div className="flex w-fit flex-col gap-16 md:gap-0 md:h-fit my-auto justify-center items-center mb-32">
        <h1 className=" flex w-fit text-center md:text-[12rem] font-normal text-7xl leading-[130px] text-white m-0 p-0">
          kunstkaja
        </h1>
        <div>
          <p className=" flex w-full text-8xl text-white opacity-60 leading-[100px] font-light text-left m-0 p-0">
            kaja andrea krøvel
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between pb-48 px-24">
        <div className=" text-slate-950 font-bold w-fit justify-center flex flex-col gap-3 md:gap-5 text-2xl">
          <MenuBtn to="/gallery">til salgs</MenuBtn>
          <MenuBtn to="/portfolio">portefølje</MenuBtn>
          <MenuBtn to="/about">om</MenuBtn>
          <div className="flex w-full justify-center md:block md:m-0">
            <SoMeIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

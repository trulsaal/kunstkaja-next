import { FaInstagram } from "react-icons/fa";
import MenuBtn from "./Buttons/MenuBtn";

import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import SoMeIcons from "./SoMeIcons";
import ThemeSwitch from "./ThemeSwitch";

export default function HomeNav() {
  return (
    <div className=" w-96 md:w-[800px] flex flex-col m-auto items-center justify-center  gap-5 md:gap-10 md:mt-auto md:h-3/4">
      <h1 className="flex text-center md:text-[10rem] text-7xl tracking-tighter text-slate-700 dark:text-slate-100">
        <strong>kunst</strong>kaja
      </h1>
      <div className=" dark:text-slate-100 text-slate-700 my-10 w-fit flex flex-col md:flex-row gap-3 md:gap-5">
        <MenuBtn to="/gallery">til salgs</MenuBtn>
        <MenuBtn to="/portfolio">portefølje</MenuBtn>
        <MenuBtn to="/about">om</MenuBtn>
        <MenuBtn to="">kontakt</MenuBtn>
      </div>
      <SoMeIcons />
    </div>
  );
}

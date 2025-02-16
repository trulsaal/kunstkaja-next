import MenuBtn from "./Buttons/MenuBtn";

export default function HomeNav() {
  return (
    <div className=" w-96 md:w-[800px] flex flex-col m-auto items-center justify-center  gap-5 md:gap-10 md:mt-auto md:h-3/4">
      <h1 className="flex text-center md:text-[10rem] text-7xl tracking-tighter text-slate-700">
        <strong>kunst</strong>kaja
      </h1>
      <div className=" my-10 w-fit flex flex-col md:flex-row gap-3 md:gap-5">
        <MenuBtn to="/gallery">til salgs</MenuBtn>
        <MenuBtn to="/portfolio">portefølje</MenuBtn>
        <MenuBtn to="/about">om</MenuBtn>
        <MenuBtn to="">kontakt</MenuBtn>
      </div>
      <div className="md:mt-auto md:mb-24">Icons</div>
    </div>
  );
}

import ThemeSwitch from "../ThemeSwitch";

export default function Header() {
  return (
    <div className="justify-between hidden md:h-28 md:flex items-center">
      <p className="tracking-tighter dark:text-slate-100 text-slate-700 text-5xl ">
        <strong>kunst</strong>Kaja
      </p>
      <ThemeSwitch></ThemeSwitch>
    </div>
  );
}

"use client";
import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="md:pr-10 justify-between hidden md:h-28 md:flex items-center">
      <a
        href="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="transition-all duration-300"
      >
        {isHovering ? (
          <div
            className="justify-start tracking-tighter flex dark:text-slate-100 text-slate-700 text-5xl opacity-55 transition-opacity
          duration-300"
          >
            <HeaderIcon />
            <strong>kunst</strong>Kaja
          </div>
        ) : (
          <div className="flex tracking-tighter dark:text-slate-100 text-slate-700 text-5xl">
            <HeaderIcon className="-translate-x-20" />
            <strong>kunst</strong>Kaja
          </div>
        )}
      </a>
      <ThemeSwitch />
    </div>
  );
}

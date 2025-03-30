"use client";

import Link from "next/link";

interface Props {
  children: string;
  to: string;
}

export default function MenuBtn({ to, children }: Props) {
  return (
    <Link
      href={to}
      className="md:border-l-4 border-black min-w-36 text-center md:text-left  px-6 md:px-2 bg-none font-base  hover:text-white transition-all duration-200 h-fit"
    >
      {children}
    </Link>
  );
}

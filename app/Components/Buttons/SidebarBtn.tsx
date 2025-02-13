"use client";

import Link from "next/link";

interface Props {
  children: string;
  to: string;
}

export default function SidebarBtn({ to, children }: Props) {
  return (
    <Link
      href={to}
      className="min-w-36 bg-none text-slate-800 text-lg font-normal leading-1 hover:font-thin hover:opacity-55 transition-all duration-200 h-fit"
    >
      {children}
    </Link>
  );
}

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
      className="min-w-36 bg-none text-lg font-normal leading-1 hover:font-light hover:opacity-55 transition-all duration-100 h-fit"
    >
      {children}
    </Link>
  );
}

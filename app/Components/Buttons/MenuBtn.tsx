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
      className="min-w-36 text-center  px-6 bg-none text-lg font-base  hover:opacity-55 transition-all duration-200 h-fit"
    >
      {children}
    </Link>
  );
}

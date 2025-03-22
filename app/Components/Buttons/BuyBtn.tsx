import Link from "next/link";

interface Props {
  label: string;
}

export default function BuyBtn({ label }: Props) {
  return (
    <Link
      className="w-32 dark:text-slate-100 text-black text-start hover:font-bold duration-150 transition-all font-thin text-sm "
      href="/"
    >
      {label}
    </Link>
  );
}

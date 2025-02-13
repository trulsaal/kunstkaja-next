import Link from "next/link";

interface Props {
  label: string;
}

export default function BuyBtn({ label }: Props) {
  return (
    <Link
      className="rounded-lg shadow-sm w-64 text-center py-3 hover:bg-slate-400 duration-150 transition-all font-semibold"
      href="/"
    >
      {label}
    </Link>
  );
}

import Link from "next/link";

interface Props {
  label: string;
}

export default function BuyBtn({ label }: Props) {
  return (
    <Link
      className="rounded-full w-64 bg-slate-100 text-center py-3 hover:bg-slate-900 hover:text-white duration-150 transition-all font-semibold"
      href="/"
    >
      {label}
    </Link>
  );
}

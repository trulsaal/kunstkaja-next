import Link from "next/link";

export default function BuyBtn() {
  return (
    <Link
      className="rounded-full bg-pink-300 w-full text-center py-2 hover:bg-pink-100 duration-150 transition-all font-semibold"
      href="/"
    >
      Bestill
    </Link>
  );
}

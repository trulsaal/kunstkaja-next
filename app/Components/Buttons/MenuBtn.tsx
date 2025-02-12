import Link from "next/link";
interface Props {
  children: string;
  to: string;
}
export default function MenuBtn({ to, children }: Props) {
  return (
    <Link href={to} className="min-w-fit max-w-full px-6 bg-none text-base">
      {children}
    </Link>
  );
}

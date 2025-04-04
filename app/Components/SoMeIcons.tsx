import Link from "next/link";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SoMeIcons() {
  return (
    <div className="dark:text-slate-100 light:text-slate-100 flex gap-2 text-3xl  ">
      <Link href="https://www.instagram.com/kunstkaja/">
        <FaInstagram className="hover:scale-150 transform transition-all duration-300 cursor-pointer" />
      </Link>
      <Link href="mailto:kajaandreak@gmail.com">
        <FaEnvelope className="hover:scale-150 transform transition-all duration-300 cursor-pointer" />
      </Link>
    </div>
  );
}

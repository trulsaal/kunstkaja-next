export const revalidate = 0;

import Image from "next/image";
import HomeNav from "../Components/HomeNav";

export default async function Home() {
  return (
    <div className="">
      <Image
        className="object-fill "
        src="/kunstkajaBg.jpg"
        alt="kunstkaja background image"
        quality="100"
        layout="fill"
      />
      <HomeNav />
    </div>
  );
}

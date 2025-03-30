export const revalidate = 0;

import Image from "next/image";
import HomeNav from "../Components/HomeNav";

export default async function Home() {
  return (
    <div className="">
      <Image
        className="md:object-fill object-cover -z-10"
        src="/kunstkajaBg.jpg"
        alt="kunstkaja background image"
        quality="100"
        layout="fill"
      />
      <HomeNav />
    </div>
  );
}

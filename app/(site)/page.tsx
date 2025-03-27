export const revalidate = 0;

import HomeImage from "../Components/HomeImage";
import HomeNav from "../Components/HomeNav";

export default async function Home() {
  return (
    <div className="md:w-lvw h-lvh flex flex-col md:flex-row items-center m-auto">
      <HomeNav />
      <HomeImage />
    </div>
  );
}

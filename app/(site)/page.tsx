export const revalidate = 0;

import HomeNav from "../Components/HomeNav";
import ThemeSwitch from "../Components/ThemeSwitch";

export default async function Home() {
  return (
    <div className="md:w-lvw h-lvh flex flex-col items-center m-auto">
      <HomeNav />
    </div>
  );
}

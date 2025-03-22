export const revalidate = 0;
import { getAboutInfo } from "@/sanity/sanitiy-util";
import { PortableText } from "next-sanity";
import Image from "next/image";

const info = await getAboutInfo();

export default async function About() {
  return (
    <div className="">
      {info.map((info) => (
        <div key={info._id} className="grid md:grid-cols-[50%,50%] gap-10">
          <div className="min-h-96 flex flex-col gap-5">
            <h1 className=" text-8xl text-slate-700 dark:text-slate-100 font-bold">
              {info.name}
            </h1>
            <div className="md:hidden w-fit">
              <Image
                width={500}
                height={1200}
                src={info.image}
                alt={info.alt}
                className="object-cover md:my-none rounded-sm aspect-[1/1.414]"
              />
            </div>
            <div className="text-slate-700 dark:text-slate-100">
              <PortableText value={info.content} />
            </div>
            <div className="mt-auto mx-auto">
              <button className="mx-auto  bg-slate-800 dark:bg-slate-100 w-full py-3 px-10 text-white dark:text-slate-700 rounded-full font-semibold hover:bg-white hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-100 hover:shadow-lg">
                Kontakt meg
              </button>
            </div>
          </div>

          <div className="hidden md:block w-fit">
            <Image
              width={500}
              height={1200}
              src={info.image}
              alt={info.alt}
              className="object-cover md:my-none rounded-sm aspect-[1/1.414]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

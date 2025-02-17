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
          <div className="h-fit flex flex-col gap-5">
            <h1 className=" text-8xl text-slate-700 font-bold">{info.name}</h1>
            <div className="md:hidden w-fit">
              <Image
                width={500}
                height={1200}
                src={info.image}
                alt={info.alt}
                className="object-cover md:my-none rounded-sm aspect-[1/1.414]"
              />
            </div>
            <div className="text-slate-700">
              <PortableText value={info.content} />
            </div>
            <div className="">
              <button className="mx-auto bg-slate-800 w-full py-3 px-10 text-white rounded-full font-semibold hover:bg-white hover:text-slate-800 hover:shadow-lg">
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

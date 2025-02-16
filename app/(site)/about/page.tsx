export const revalidate = 0;
import { getAboutInfo } from "@/sanity/sanitiy-util";
import { PortableText } from "next-sanity";
import Image from "next/image";

const info = await getAboutInfo();

export default async function About() {
  return (
    <div>
      {info.map((info) => (
        <div key={info._id} className="px-10 h-lvh flex flex-row ">
          <div className=" grid grid-cols-[50%,50%]">
            <div className="flex flex-col items-center px-10 gap-10">
              <h1 className="font-medium tracking-tight text-5xl text-slate-700 w-full">
                {info.name}
              </h1>
              <PortableText value={info.content}></PortableText>
              <button className=" bg-slate-800 w-fit py-3 px-10 text-white rounded-full font-semibold hover:bg-white hover:text-slate-800 hover:shadow-lg">
                Kontakt meg
              </button>
            </div>
            <div className="w-fit">
              <Image
                width={500}
                height={1200}
                src={info.image}
                alt={info.alt}
                className="object-cover rounded-sm aspect-[1/1.414]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

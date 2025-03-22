import React from "react";
import Image from "next/image";
import BuyBtn from "../Buttons/BuyBtn";

interface Props {
  name: string;
  alt: string;
  image: string;
  text: string;
  price: string;
}

export default async function ImageCard({
  image,
  alt,
  name,
  text,
  price,
}: Props) {
  return (
    <div className="">
      <div className="px-12 md:p-0 flex flex-col items-center md:w-[450px] h-svh md:h-full gap-4">
        <div className="">
          <Image
            src={image}
            alt={alt}
            width={500}
            height={1200}
            className="object-cover aspect-[1/1.414]"
          />
        </div>
        <div className="flex flex-col gap-4 leading-tight w-full md:items-start items-center md:text-left text-center dark:text-slate-100">
          <div className="gap-2 flex flex-col">
            <span className="font-medium leading-none md:text-lg text-normal">
              {name}
            </span>
            <span className="text-sm  leading-none font-medium">{text}</span>
          </div>

          <BuyBtn label={"NOK " + price} />
        </div>
      </div>
    </div>
  );
}

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
      <div className="px-12 md:p-5 flex flex-col items-center gap-4 md:w-[450px] h-svh md:h-full ">
        <div className="">
          <Image
            src={image}
            alt={alt}
            width={500}
            height={1200}
            className="object-cover rounded-lg aspect-[1/1.414]"
          />
        </div>
        <div className="flex flex-col gap-2 leading-tight w-full items-center text-center ">
          <div className="flex flex-col">
            <span className="font-medium leading-none text-normal mb-2">
              {name.toUpperCase()}
            </span>
            <span className="text-sm  leading-none font-medium">{text}</span>
          </div>

          <BuyBtn label={price + " ,-"} />
        </div>
      </div>
    </div>
  );
}

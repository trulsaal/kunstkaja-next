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
    <div>
      <div className="p-5 outline flex flex-col items-center gap-4">
        <Image
          src={image}
          alt={alt}
          width={300}
          height={400}
          className="outline outline-black rounded-sm"
        />
        <span className="font-bold text-2xl">{name}</span>
        <span className="text-lg font-bold">{text}</span>
        <span className="text-4xl">{price}</span>

        <BuyBtn />
      </div>
    </div>
  );
}

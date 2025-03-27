import Image from "next/image";

export default function HomeImage() {
  return (
    <div className="hidden md:block w-fit h-lvh overflow-clip">
      <Image
        className=""
        alt="alt"
        src="/Kajaprofil1.jpg"
        width={800}
        height={300}
      />
    </div>
  );
}

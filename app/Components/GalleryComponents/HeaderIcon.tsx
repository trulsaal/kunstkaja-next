import { CgArrowLeft } from "react-icons/cg";

export default function HeaderIcon({
  className = "translate-x-1 ease-out transition-all duration-500",
}) {
  return (
    <div className="flex flex-col justify-center text-4xl  w-10">
      <CgArrowLeft className={className} />
    </div>
  );
}

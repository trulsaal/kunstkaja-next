import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Link className="bg-red-100" href="/gallery">
        This is Home, go to Gallery
      </Link>
    </div>
  );
}

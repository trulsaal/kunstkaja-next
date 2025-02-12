import { getImageCards } from "@/sanity/sanitiy-util";
import ImageCard from "../Components/GalleryComponents/ImageCard";

export default async function Gallery() {
  const imageCards = await getImageCards();

  return (
    <div className="grid grid-cols-3 bg-gray-300 gap-20 items-center px-44 w-lvw">
      {imageCards.map((imageCard) => (
        <div key={imageCard._id}>
          {imageCard.image && (
            <ImageCard
              image={imageCard.image}
              alt={imageCard.alt}
              name={imageCard.name}
              text={imageCard.text}
              price={imageCard.price}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export const revalidate = 0;

import { getImageCards } from "@/sanity/sanitiy-util";
import ImageCard from "../../Components/GalleryComponents/ImageCard";

export default async function Gallery() {
  const imageCards = await getImageCards();

  return (
    <div className="flex justify-center items-center">
      <div className="gap-10 md:gap-24 grid md:grid-cols-3">
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
    </div>
  );
}

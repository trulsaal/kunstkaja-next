import { getImageCards } from "@/sanity/sanitiy-util";
import ImageCard from "../Components/GalleryComponents/ImageCard";

export default async function Gallery() {
  const imageCards = await getImageCards();

  return (
    <div className="flex justify-center items-center ">
      <div className="gap-56 grid grid-cols-2">
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

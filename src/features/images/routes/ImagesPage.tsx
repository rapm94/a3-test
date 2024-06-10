import type { RootState } from "@/stores";
import { useSelector } from "@/stores";

export const ImagesPage = () => {
  const selectedSubBreed = useSelector(
    (state: RootState) => state.images.selectedSubBreed
  );
  const images = useSelector((state: RootState) => state.images.images);

  const filteredImages = selectedSubBreed
    ? images.filter((image) => image.includes(`/${selectedSubBreed}/`))
    : images;

  return (
    <section>
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filteredImages.map((image: string, index: number) => (
            <img
              key={image}
              src={image}
              alt={`Dog ${index}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      ) : (
        <p>No images available. Please select a breed.</p>
      )}
    </section>
  );
};

import type { RootState } from "@/stores";
import { useSelector } from "@/stores";

export const ImagesPage = () => {
  const selectedBreed = useSelector(
    (state: RootState) => state.images.selectedBreed
  );
  const images = useSelector((state: RootState) => state.images[selectedBreed]);

  return (
    <section>
      <h1>ImagesPage</h1>
      {images ? (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image: string, index: number) => (
            <img
              key={index}
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

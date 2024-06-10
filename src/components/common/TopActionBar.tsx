import { setImages } from "@/features/images/imagesSlice";
import {
  useGetBreedsQuery,
  useGetImagesByBreedQuery,
} from "@/services/imagesApi";
import { useDispatch } from "@/stores";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const TopActionBar = () => {
  const dispatch = useDispatch();
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [selectedSubBreed, setSelectedSubBreed] = useState<string | null>(null);

  const { data: breedsData } = useGetBreedsQuery();
  const { data: imagesData } = useGetImagesByBreedQuery(
    selectedBreed && selectedSubBreed
      ? `${selectedBreed}/${selectedSubBreed}`
      : selectedBreed || "",
    {
      skip: !selectedBreed,
    }
  );

  useEffect(() => {
    if (imagesData && selectedBreed) {
      dispatch(setImages({ breed: selectedBreed, images: imagesData.message }));
    }
  }, [imagesData, selectedBreed, dispatch]);

  const handleBreedChange = (breed: string) => {
    setSelectedBreed(breed);
    setSelectedSubBreed(null);
  };

  const handleSubBreedChange = (subBreed: string) => {
    setSelectedSubBreed(subBreed);
  };

  return (
    <nav className="flex justify-between items-center w-1/2 h-16 py-4 gap-4 max-w-80">
      <Select onValueChange={handleBreedChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a breed" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {breedsData &&
              Object.keys(breedsData.message).map((breed) => (
                <SelectItem key={breed} value={breed}>
                  {breed}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedBreed &&
        breedsData?.message &&
        breedsData.message[selectedBreed].length > 0 && (
          <Select onValueChange={handleSubBreedChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a sub-breed" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {breedsData.message[selectedBreed].map((subBreed) => (
                  <SelectItem key={subBreed} value={subBreed}>
                    {subBreed}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
    </nav>
  );
};

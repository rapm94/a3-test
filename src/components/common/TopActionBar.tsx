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

  const { data: breedsData } = useGetBreedsQuery();
  const { data: imagesData } = useGetImagesByBreedQuery(selectedBreed || "", {
    skip: !selectedBreed,
  });

  useEffect(() => {
    if (imagesData && selectedBreed) {
      dispatch(setImages({ breed: selectedBreed, images: imagesData.message }));
    }
  }, [imagesData, selectedBreed, dispatch]);

  const handleBreedChange = (breed: string) => {
    setSelectedBreed(breed);
  };

  return (
    <nav className="flex justify-between items-center w-full h-16 bg-blue-500">
      <Select onValueChange={handleBreedChange}>
        <SelectTrigger>
          <SelectValue />
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
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  );
};

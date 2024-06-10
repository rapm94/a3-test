import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImagesState {
  selectedBreed: string | null;
  selectedSubBreed: string | null;
  images: string[];
}

const initialState: ImagesState = {
  selectedBreed: null,
  selectedSubBreed: null,
  images: [],
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (
      state,
      action: PayloadAction<{ breed: string; images: string[] }>
    ) => {
      state.selectedBreed = action.payload.breed;
      state.images = action.payload.images;
    },
    setSelectedSubBreed: (state, action: PayloadAction<string | null>) => {
      state.selectedSubBreed = action.payload;
    },
  },
});

export const { setImages, setSelectedSubBreed } = imageSlice.actions;

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImagesState {
  [breed: string]: string[];
}

const initialState: ImagesState = {};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (
      state,
      action: PayloadAction<{ breed: string; images: string[] }>
    ) => {
      state[action.payload.breed] = action.payload.images;
    },
  },
});

export const { setImages } = imageSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import {
  useDispatch as useBaseDispatch,
  useSelector as useBaseSelector,
} from "react-redux";
import { imageSlice } from "../features/images/imagesSlice";
import { imageApi } from "../services/imagesApi";

const makeStore = () => {
  return configureStore({
    reducer: {
      images: imageSlice.reducer,
      [imageApi.reducerPath]: imageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(imageApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useDispatch: () => AppDispatch = useBaseDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useBaseSelector;

export default makeStore;

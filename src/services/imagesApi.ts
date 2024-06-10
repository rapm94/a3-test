import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api" }),
  endpoints: (builder) => ({
    getBreeds: builder.query<{ message: Record<string, string[]> }, void>({
      query: () => "breeds/list/all",
    }),
    getImagesByBreed: builder.query<{ message: string[] }, string>({
      query: (breed) => `breed/${breed}/images`,
    }),
  }),
});

export const { useGetBreedsQuery, useGetImagesByBreedQuery } = imagesApi;

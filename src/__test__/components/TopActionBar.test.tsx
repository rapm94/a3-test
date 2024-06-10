import { TopActionBar } from "@/components/common/TopActionBar";
import { imageSlice } from "@/features/images/imagesSlice";
import { imagesApi } from "@/services/imagesApi";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";

const server = setupServer(
  http.get("https://dog.ceo/api/breeds/list/all", () => {
    return HttpResponse.json({
      message: {
        breed1: ["subbreed1", "subbreed2"],
        breed2: [],
      },
    });
  }),
  http.get("https://dog.ceo/api/breed/:breed/images", () => {
    return HttpResponse.json({
      message: ["image1.jpg", "image2.jpg"],
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("TopActionBar", () => {
  it("renders breed and sub-breed selects and dispatches actions", async () => {
    const store = configureStore({
      reducer: {
        images: imageSlice.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(imagesApi.middleware),
    });

    render(
      <Provider store={store}>
        <TopActionBar />
      </Provider>
    );

    expect(screen.getByText("Select a breed")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Select a breed"));
    expect(await screen.findByText("breed1")).toBeInTheDocument();
    expect(screen.getByText("breed2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("breed1"));
    expect(await screen.findByText("Select a sub-breed")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Select a sub-breed"));
    expect(await screen.findByText("subbreed1")).toBeInTheDocument();
    expect(screen.getByText("subbreed2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("subbreed1"));

    expect(store.getState().images.selectedBreed).toBe("breed1");
    expect(store.getState().images.images).toEqual([
      "image1.jpg",
      "image2.jpg",
    ]);
  });
});

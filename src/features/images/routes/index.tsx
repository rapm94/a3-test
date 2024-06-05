import { RootLayout } from "@/components/layouts";
import { Route, Routes } from "react-router-dom";
import { ImagesPage } from "./ImagesPage";

export const ImagesRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<ImagesPage />} />
      </Route>
    </Routes>
  );
};

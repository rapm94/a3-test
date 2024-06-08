import { lazyImport } from "@/utils";

const { ImagesRoutes } = lazyImport(
  () => import("@/features/images"),
  "ImagesRoutes"
);

export const publicRoutes = [
  {
    path: "/",
    element: <ImagesRoutes />,
  },
];

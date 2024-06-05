import { lazyImport } from "@/utils";

const { ImagesRoutes } = lazyImport(
  () => import("@/features/images/routes"),
  "ImagesRoutes"
);

export const publicRoutes = [
  {
    path: "/",
    element: <ImagesRoutes />,
  },
];

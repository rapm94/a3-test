import { lazyImport } from "@/utils";

const { AuthenticationRoutes } = lazyImport(
  () => import("@/features/auth/routes"),
  "AuthenticationRoutes"
);

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <ImagesRoutes />,
  },
];

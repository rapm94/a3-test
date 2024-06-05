import { Navigate, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const routes = [
    ...publicRoutes,
    {
      path: "*",
      element: <Navigate to="/auth/email" replace />,
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};

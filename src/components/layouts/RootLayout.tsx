import { Outlet } from "react-router-dom";
import { TopActionBar } from "../common/TopActionBar";

export const RootLayout = () => {
  return (
    <main className="h-screen flex flex-col w-screen items-center">
      <TopActionBar />
      <Outlet />
    </main>
  );
};

import { Outlet } from "react-router-dom";
import { TopActionBar } from "../common/TopActionBar";

export const RootLayout = () => {
  return (
    <main>
      <TopActionBar />
      <Outlet />
    </main>
  );
};

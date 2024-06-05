import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function Providers({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

export default App;

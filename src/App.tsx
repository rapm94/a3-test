import { useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";
import { AppRoutes } from "./routes";
import makeStore, { type AppStore } from "./stores";

function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <BrowserRouter>
      <ReduxProvider store={makeStore()}>{children}</ReduxProvider>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

export default App;

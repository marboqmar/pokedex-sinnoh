import { Header } from "./components/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import { ViewContextProvider } from "./contexts/ViewContextProvider";

export const App = () => {
  return (
    <>
      <ViewContextProvider>
        <Header />
        <Outlet />
      </ViewContextProvider>
    </>
  );
};

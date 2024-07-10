import { Header } from "./components/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import { ViewContextProvider } from "./contexts/ViewContextProvider";
import { InfoFromApiContextProvider } from "./contexts/InfoFromApiContextProvider.tsx";

export const App = () => {
  return (
    <>
      <ViewContextProvider>
        <Header />
        <InfoFromApiContextProvider>
          <Outlet />
        </InfoFromApiContextProvider>
      </ViewContextProvider>
    </>
  );
};

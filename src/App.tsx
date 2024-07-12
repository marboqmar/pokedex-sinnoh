import { Header } from "./components/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import { ViewContextProvider } from "./contexts/ViewContextProvider";
import { InfoFromApiContextProvider } from "./contexts/InfoFromApiContextProvider.tsx";
import { FiltersContextProvider } from "./contexts/FiltersContextProvider.tsx";
import { PaginationNumbersContextProvider } from "./contexts/PaginationNumbersContextProvider.tsx";
import { WindowWidthContextProvider } from "./contexts/WindowWidthContextProvider.tsx";

export const App = () => {
  return (
    <>
      <WindowWidthContextProvider>
        <ViewContextProvider>
          <FiltersContextProvider>
            <Header />
            <InfoFromApiContextProvider>
              <PaginationNumbersContextProvider>
                <Outlet />
              </PaginationNumbersContextProvider>
            </InfoFromApiContextProvider>
          </FiltersContextProvider>
        </ViewContextProvider>
      </WindowWidthContextProvider>
    </>
  );
};

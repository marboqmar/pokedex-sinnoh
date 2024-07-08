import { Header } from "./Header/Header.tsx";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

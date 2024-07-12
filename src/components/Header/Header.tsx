import "./Header.scss";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";
import { DarkModeButton } from "./HeaderButtons/DarkModeButton.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { ShowViewOptionsAndFavsButtons } from "./ShowViewOptionsAndFavsButtons.tsx";
import { useContext } from "react";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";

export const Header = () => {
  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <div className="flex-row space-between align-center header">
      <Button
        transparent
        withoutBorder
        withoutHover
        component={Link}
        isLink
        to={"/"}
      >
        <img
          className={"header__logo"}
          src={windowWidth > 960 ? "/logo.png" : "./logo-vertical.png"}
          alt="logo"
        />
      </Button>
      <SearchBar />
      <div className={"flex-row gap-18"}>
        {/*<Button className={"header__btn"}>*/}
        {/*  <i className="fa-solid fa-circle-half-stroke header__icon"></i>*/}
        {/*</Button>*/}
        <ShowViewOptionsAndFavsButtons />
        <DarkModeButton />
      </div>
    </div>
  );
};

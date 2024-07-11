import "./Header.scss";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";
import { ViewOptionsButton } from "./HeaderButtons/ViewOptionsButton.tsx";
import { DarkModeButton } from "./HeaderButtons/DarkModeButton.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { FiltersContext } from "../../contexts/FiltersContextProvider.tsx";
import { useContext } from "react";

export const Header = () => {
  const { isOnlyFavs, setNewIsOnlyFavs } = useContext(FiltersContext);
  const handleOnlyFavs = () => {
    setNewIsOnlyFavs(!isOnlyFavs);
  };

  return (
    <div className="flex-row space-between align-center max-width-1440 header">
      <Button
        transparent
        withoutBorder
        withoutHover
        component={Link}
        isLink
        to={"/"}
      >
        <img className={"header__logo"} src={"/logo.png"} alt="logo" />
      </Button>
      <SearchBar />
      <div className={"flex-row gap-18"}>
        <ViewOptionsButton />
        <Button className={"header__btn"} onClick={handleOnlyFavs}>
          <i className="fa-solid fa-heart header__icon"></i>
        </Button>
        <DarkModeButton />
      </div>
    </div>
  );
};

import "./Header.scss";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";
import { DarkModeButton } from "./HeaderButtons/DarkModeButton.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { ShowViewOptionsAndFavsButtons } from "./ShowViewOptionsAndFavsButtons.tsx";

export const Header = () => {
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
        <ShowViewOptionsAndFavsButtons />
        <DarkModeButton />
      </div>
    </div>
  );
};

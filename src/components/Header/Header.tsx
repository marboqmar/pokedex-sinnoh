import "./Header.scss";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";
import { ViewOptionsButton } from "./ViewOptionsButton.tsx";
import { DarkModeButton } from "./DarkModeButton.tsx";

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
      <input
        className={"font header__search-bar"}
        type={"text"}
        placeholder={"Search by name"}
      />
      <div className={"flex-row gap-18"}>
        <ViewOptionsButton />
        <Button className={"header__btn"}>
          <i className="fa-solid fa-heart header__icon"></i>
        </Button>
        <DarkModeButton />
      </div>
    </div>
  );
};

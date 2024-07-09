import "./Header.scss";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex-row space-between align-center max-width-1440 header">
      <Button withoutBorder withoutHover component={Link} isLink to={"/"}>
        <img className={"header--logo"} src={"/logo.png"} alt="logo" />
      </Button>
      <input
        className={"font header--search-bar"}
        type={"text"}
        placeholder={"Search by name"}
      />
      <div className={"flex-row gap-18"}>
        <Button className={"header--btn"} color={"white"}>
          <i className="fa-solid fa-list-ul header--icon"></i>
        </Button>
        <Button className={"header--btn"} color={"white"}>
          <i className="fa-solid fa-heart header--icon"></i>
        </Button>
        <Button className={"header--btn"} color={"white"}>
          <i className="fa-solid fa-circle-half-stroke header--icon"></i>
        </Button>
      </div>
    </div>
  );
};

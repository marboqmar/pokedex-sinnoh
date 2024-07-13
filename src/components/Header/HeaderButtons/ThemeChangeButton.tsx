import { Button } from "../../Button/Button.tsx";
import { themeChange } from "../../../utils/themeChange.ts";

export const ThemeChangeButton = () => {
  return (
    <Button className={"header__btn"} role={"button"} onClick={themeChange}>
      <i className="fa-solid fa-circle-half-stroke header__icon"></i>
    </Button>
  );
};

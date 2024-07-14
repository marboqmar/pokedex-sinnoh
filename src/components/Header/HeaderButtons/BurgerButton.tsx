import { Button } from "../../Button/Button.tsx";
import { useState } from "react";
import { ShowViewOptionsAndFavsButtons } from "../ShowViewOptionsAndFavsButtons.tsx";
import { ThemeChangeButton } from "./ThemeChangeButton.tsx";

export const BurgerButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Button
        className={"header__btn header__btn--burger"}
        onClick={handleBurgerButtonClick}
      >
        <i className="fa-solid fa-bars header__icon"></i>
      </Button>
      {isActive && (
        <div className="flex gap-12 header__dropdown-menu">
          <ShowViewOptionsAndFavsButtons />
          <ThemeChangeButton />
        </div>
      )}
    </>
  );
};

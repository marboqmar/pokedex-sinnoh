import { Button } from "../../Button/Button.tsx";
import { useState } from "react";
import { ThemeChangeButton } from "./ThemeChangeButton.tsx";
import { ViewOptionsButton } from "./ViewOptionsButton.tsx";
import { DisplayOnlyFavsButton } from "./DisplayOnlyFavsButton.tsx";

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
          <ViewOptionsButton />
          <DisplayOnlyFavsButton />
          <ThemeChangeButton />
        </div>
      )}
    </>
  );
};

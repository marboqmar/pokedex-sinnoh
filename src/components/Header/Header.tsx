import "./Header.scss";
import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar.tsx";
import { ShowViewOptionsAndFavsButtons } from "./ShowViewOptionsAndFavsButtons.tsx";
import { useContext } from "react";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";
import { useIsOnPokemonDetails } from "../../utils/useIsOnPokemonDetails.ts";
import { BurgerButton } from "./HeaderButtons/BurgerButton.tsx";
import { ThemeChangeButton } from "./HeaderButtons/ThemeChangeButton.tsx";

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
          src={windowWidth > 1014 ? "/logo.png" : "/logo-vertical.png"}
          alt="logo"
        />
      </Button>
      <SearchBar />
      <div className={"flex-row gap-18 header__right-side-buttons"}>
        {!useIsOnPokemonDetails() ? (
          windowWidth > 822 ? (
            <>
              <ShowViewOptionsAndFavsButtons />
              <ThemeChangeButton />
            </>
          ) : (
            <BurgerButton />
          )
        ) : (
          <ThemeChangeButton />
        )}
      </div>
    </div>
  );
};

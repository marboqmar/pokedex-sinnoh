import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ViewOptionsButton } from "./HeaderButtons/ViewOptionsButton.tsx";
import { DisplayOnlyFavsButton } from "./HeaderButtons/DisplayOnlyFavsButton.tsx";

export const ShowViewOptionsAndFavsButtons = () => {
  const [isOnPokemonDetails, setIsOnPokemonDetails] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("pokemon-details")
      ? setIsOnPokemonDetails(true)
      : setIsOnPokemonDetails(false);
  }, [location]);

  return isOnPokemonDetails ? (
    <>
      <div className={"header__btn"}></div>
      <div className={"header__btn"}></div>
    </>
  ) : (
    <>
      <ViewOptionsButton />
      <DisplayOnlyFavsButton />
    </>
  );
};

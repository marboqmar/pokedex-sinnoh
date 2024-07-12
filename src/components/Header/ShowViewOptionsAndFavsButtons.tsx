import { ViewOptionsButton } from "./HeaderButtons/ViewOptionsButton.tsx";
import { DisplayOnlyFavsButton } from "./HeaderButtons/DisplayOnlyFavsButton.tsx";
import { useIsOnPokemonDetails } from "../../utils/useIsOnPokemonDetails.ts";

export const ShowViewOptionsAndFavsButtons = () => {
  return useIsOnPokemonDetails() ? (
    <>
      {/*<div className={"header__btn"}></div>*/}
      {/*<div className={"header__btn"}></div>*/}
    </>
  ) : (
    <>
      <ViewOptionsButton />
      <DisplayOnlyFavsButton />
    </>
  );
};

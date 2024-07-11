import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../../../contexts/ViewContextProvider.tsx";
import { useLocation } from "react-router-dom";
import { Button } from "../../Button/Button.tsx";

export const ViewOptionsButton = () => {
  const { setView, view } = useContext(ViewContext);
  const [isOnPokemonDetails, setIsOnPokemonDetails] = useState<boolean>(false);
  const location = useLocation();

  const changeView = () => {
    view === "grid" ? setView("list") : setView("grid");
  };

  useEffect(() => {
    location.pathname.includes("pokemon-details")
      ? setIsOnPokemonDetails(true)
      : setIsOnPokemonDetails(false);
  }, [location]);

  return isOnPokemonDetails ? (
    <div className={"header__btn"}></div>
  ) : (
    <Button className={"header__btn"} onClick={changeView}>
      {view === "grid" ? (
        <i className="fa-solid fa-list-ul header__icon"></i>
      ) : (
        <i className="fa-solid fa-grip-vertical header__icon"></i>
      )}
    </Button>
  );
};

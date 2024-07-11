import { useContext } from "react";
import { FiltersContext } from "../../../contexts/FiltersContextProvider.tsx";
import { Button } from "../../Button/Button.tsx";

export const DisplayOnlyFavsButton = () => {
  const { isOnlyFavs, setNewIsOnlyFavs } = useContext(FiltersContext);
  const handleOnlyFavs = () => {
    setNewIsOnlyFavs(!isOnlyFavs);
  };

  return (
    <Button className={"header__btn"} onClick={handleOnlyFavs}>
      <i className="fa-solid fa-heart header__icon"></i>
    </Button>
  );
};

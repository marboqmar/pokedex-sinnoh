import { useContext } from "react";
import { ViewContext } from "../../../contexts/ViewContextProvider.tsx";
import { Button } from "../../Button/Button.tsx";

export const ViewOptionsButton = () => {
  const { setView, view } = useContext(ViewContext);

  const changeView = () => {
    view === "grid" ? setView("list") : setView("grid");
  };

  return (
    <Button className={"header__btn"} onClick={changeView}>
      {view === "grid" ? (
        <i className="fa-solid fa-list-ul header__icon"></i>
      ) : (
        <i className="fa-solid fa-grip-vertical header__icon"></i>
      )}
    </Button>
  );
};

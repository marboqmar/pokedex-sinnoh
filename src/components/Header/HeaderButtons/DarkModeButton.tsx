import { Button } from "../../Button/Button.tsx";

export const DarkModeButton = () => {
  localStorage.setItem("Dark_mode", "light");

  const handleThemeChangeLight = () => {
    if (localStorage.getItem("Dark_mode") === "light") {
      localStorage.setItem("Dark_mode", "dark");
    } else {
      localStorage.setItem("Dark_mode", "light");
    }

    const currentTheme = localStorage.getItem("Dark_mode");

    if (currentTheme) {
      document.body.setAttribute("site-theme", currentTheme);
    }
    console.log(localStorage.getItem("Dark_mode"));
  };

  return (
    <>
      <Button className={"header__btn"} onClick={handleThemeChangeLight}>
        <i className="fa-solid fa-circle-half-stroke header__icon"></i>
      </Button>
    </>
  );
};

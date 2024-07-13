import { Button } from "../../Button/Button.tsx";

const LOCAL_STORAGE_DARK_MODE_KEY = "Dark-mode";

export const DarkModeButton = () => {
  localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, "light");

  const handleThemeChangeLight = () => {
    if (localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY) === "light") {
      localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, "dark");
    } else {
      localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, "light");
    }

    const currentTheme = localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY);

    if (currentTheme) {
      document.body.setAttribute("site-theme", currentTheme);
    }
    console.log(localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY));
  };

  return (
    <>
      <Button className={"header__btn"} onClick={handleThemeChangeLight}>
        <i className="fa-solid fa-circle-half-stroke header__icon"></i>
      </Button>
    </>
  );
};

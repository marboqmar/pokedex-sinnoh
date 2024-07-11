import { Button } from "../../Button/Button.tsx";
import { useEffect, useState } from "react";

type siteThemeOptions = "dark" | "light";

export const DarkModeButton = () => {
  const [siteTheme, setSiteTheme] = useState<siteThemeOptions>("light");

  const handleThemeChange = () => {
    setSiteTheme(siteTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("site-theme", siteTheme);
  });

  return (
    <Button className={"header__btn"} onClick={handleThemeChange}>
      <i className="fa-solid fa-circle-half-stroke header__icon"></i>
    </Button>
  );
};

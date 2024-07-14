export const LOCAL_STORAGE_DARK_MODE_KEY = "Dark-mode";

export const themeChange = () => {
  if (localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY) === "light") {
    localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, "dark");
  } else {
    localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, "light");
  }

  const currentTheme = localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY);

  if (currentTheme) {
    document.body.setAttribute("site-theme", currentTheme);
  }
};

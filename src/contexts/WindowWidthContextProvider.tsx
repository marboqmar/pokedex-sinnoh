import { createContext, ReactNode, useEffect, useState } from "react";

interface WindowWidthContextModel {
  windowWidth: number;
  setNewWindowSize: (windowSize: number) => void;
}

const contextDefault: WindowWidthContextModel = {
  windowWidth: 0,
  setNewWindowSize: () => {
    return;
  },
};

export const WindowWidthContext =
  createContext<WindowWidthContextModel>(contextDefault);

interface WindowWidthContextProviderProps {
  children: ReactNode;
}

export const WindowWidthContextProvider = ({
  children,
}: WindowWidthContextProviderProps): JSX.Element | null => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const contextValue: WindowWidthContextModel = {
    windowWidth,
    setNewWindowSize: setWindowWidth,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={contextValue}>
      {children}
    </WindowWidthContext.Provider>
  );
};

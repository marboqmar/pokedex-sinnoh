import { createContext, ReactNode, useState } from "react";

type viewOptions = "grid" | "list";

interface ViewContextModel {
  view: viewOptions;
  setView: (view: viewOptions) => void;
}

const contextDefault: ViewContextModel = {
  view: "grid",
  setView: () => {
    return;
  },
};

export const ViewContext = createContext<ViewContextModel>(contextDefault);

interface ViewProviderProps {
  children: ReactNode;
}

export const ViewContextProvider = ({
  children,
}: ViewProviderProps): JSX.Element | null => {
  const [view, setNewView] = useState<viewOptions>("grid");

  const contextValue: ViewContextModel = {
    view,
    setView: setNewView,
  };

  return (
    <ViewContext.Provider value={contextValue}>{children}</ViewContext.Provider>
  );
};

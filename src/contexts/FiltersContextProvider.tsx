import { createContext, ReactNode, useState } from "react";

interface FiltersContextModel {
  search: string;
  setNewSearch: (search: string) => void;
  isOnlyFavs: boolean;
  setNewIsOnlyFavs: (isOnlyFavs: boolean) => void;
}

const contextDefault: FiltersContextModel = {
  search: "",
  setNewSearch: () => {
    return;
  },
  isOnlyFavs: false,
  setNewIsOnlyFavs: () => {
    return;
  },
};

export const FiltersContext =
  createContext<FiltersContextModel>(contextDefault);

interface SearchContextProviderProps {
  children: ReactNode;
}

export const FiltersContextProvider = ({
  children,
}: SearchContextProviderProps): JSX.Element | null => {
  const [search, setSearch] = useState<string>("");
  const [isOnlyFavs, setIsOnlyFavs] = useState<boolean>(false);

  const contextValue: FiltersContextModel = {
    search,
    setNewSearch: setSearch,
    isOnlyFavs,
    setNewIsOnlyFavs: setIsOnlyFavs,
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};

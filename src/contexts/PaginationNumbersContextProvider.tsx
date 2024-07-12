import { createContext, ReactNode, useState } from "react";

interface PaginationNumbersContextModel {
  paginationNumbers: number[];
  setNewPaginationNumbers: (paginationNumbers: number[]) => void;
}

const contextDefault: PaginationNumbersContextModel = {
  paginationNumbers: [0],
  setNewPaginationNumbers: () => {
    return;
  },
};

export const PaginationNumbersContext =
  createContext<PaginationNumbersContextModel>(contextDefault);

interface PaginationNumbersContextProviderProps {
  children: ReactNode;
}

export const PaginationNumbersContextProvider = ({
  children,
}: PaginationNumbersContextProviderProps): JSX.Element | null => {
  const [paginationNumbers, setPaginationNumbers] = useState<number[]>([0]);

  const contextValue: PaginationNumbersContextModel = {
    paginationNumbers,
    setNewPaginationNumbers: setPaginationNumbers,
  };

  return (
    <PaginationNumbersContext.Provider value={contextValue}>
      {children}
    </PaginationNumbersContext.Provider>
  );
};

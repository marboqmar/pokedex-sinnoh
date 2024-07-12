import "./Pagination.scss";
import { Button } from "../Button/Button.tsx";
import { useCallback, useContext, useEffect } from "react";
import { PaginationNumbersContext } from "../../contexts/PaginationNumbersContextProvider.tsx";

export const Pagination = ({
  pokemonPerPage,
  length,
  setNewCurrentPage,
  currentPage,
}: {
  pokemonPerPage: number;
  length: number;
  setNewCurrentPage: (page: number) => void;
  currentPage: number;
}) => {
  const { paginationNumbers, setNewPaginationNumbers } = useContext(
    PaginationNumbersContext,
  );

  useEffect(() => {
    const paginationNumbersList = [];
    for (let i: number = 1; i <= Math.ceil(length / pokemonPerPage); i++) {
      paginationNumbersList.push(i);
    }
    setNewPaginationNumbers(paginationNumbersList);
  }, [length, pokemonPerPage, setNewPaginationNumbers]);

  const determineCurrentPage = useCallback(
    (page: number) => {
      const lastPage: number = paginationNumbers.slice(-1)[0];

      if (page > lastPage) {
        setNewCurrentPage(1);
      } else {
        setNewCurrentPage(page);
      }
    },
    [paginationNumbers, setNewCurrentPage],
  );

  // When clicking on DisplayOnlyFavsButton, it did re-render paginationNumbers, but did not recalculate currentPage,
  // so if you clicked DisplayOnlyFavsButton while on page 2 with only one liked pokemon, you would be on a non existing
  // currentPage 2 and had to click page 1 to see the pokemon. This useEffect recalculates currentPage when
  // paginationNumbers changes
  useEffect(() => {
    determineCurrentPage(currentPage);
  }, [currentPage, determineCurrentPage, paginationNumbers]);

  return (
    <div className="flex justify-center gap-12 pagination">
      {paginationNumbers.map((pageNumber) => (
        <Button
          className={`pagination__button ${currentPage === pageNumber ? "pagination__button--active" : ""}`}
          key={pageNumber}
          onClick={() => determineCurrentPage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};

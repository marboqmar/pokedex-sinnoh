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

  const lastAvailablePage: number = paginationNumbers.slice(-1)[0];

  // When clicking on DisplayOnlyFavsButton it did not recalculate currentPage,
  // so if you clicked DisplayOnlyFavsButton while on page 2 with only one liked pokemon, you would be on a non existing
  // currentPage 2 and had to click page 1 to see the pokemon.

  // This function sets current page to 1 when current page is greater than the available pages (e.g. if your current
  // page is 6 and click on DisplayOnlyFavsButton and you have only 1 page, then it will set your current page to 1)
  const determineCurrentPage = useCallback(
    (currentPage: number) => {
      if (currentPage > lastAvailablePage) {
        setNewCurrentPage(1);
      } else {
        setNewCurrentPage(currentPage);
      }
    },
    [setNewCurrentPage, lastAvailablePage],
  );

  // This useEffect recalculates currentPage when paginationNumbers changes
  useEffect(() => {
    determineCurrentPage(currentPage);
  }, [currentPage, determineCurrentPage, paginationNumbers]);

  return (
    <div className="flex justify-center gap-12 pagination">
      {currentPage === 1 ? (
        <div className={"pagination__button-placeholder"}></div>
      ) : (
        <Button
          className={"pagination__button"}
          onClick={() => {
            determineCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
      )}
      <div className={"pagination__button pagination__current-page"}>
        {currentPage}
      </div>
      {lastAvailablePage === currentPage ? (
        <div className={"pagination__button-placeholder"}></div>
      ) : (
        <Button
          className={"pagination__button"}
          onClick={() => {
            determineCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
      )}
    </div>
  );
};

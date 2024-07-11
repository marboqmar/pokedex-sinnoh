import "./Pagination.scss";
import { Button } from "../Button/Button.tsx";

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
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / pokemonPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-12 pagination">
      {paginationNumbers.map((pageNumber) => (
        <Button
          className={`pagination__button ${currentPage === pageNumber ? "pagination__button--active" : ""}`}
          key={pageNumber}
          onClick={() => setNewCurrentPage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};

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
    <div className="flex justify-center gap-12 pokemon-display__pagination">
      {paginationNumbers.map((pageNumber) => (
        <Button
          className={`pokemon-display__pagination-button ${currentPage === pageNumber ? "pokemon-display__pagination-button--active" : ""}`}
          key={pageNumber}
          onClick={() => setNewCurrentPage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
    </div>
  );
};

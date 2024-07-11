import { useContext, useMemo } from "react";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";

export const useCurrentDisplayedPokemon = (
  currentPage: number,
  pokemonPerPage: number,
) => {
  const { parsedPokemon } = useContext(InfoFromApiContext);

  return useMemo(() => {
    const firstDisplayedPokemonIndex = (currentPage - 1) * pokemonPerPage;
    const lastDisplayedPokemonIndex =
      firstDisplayedPokemonIndex + pokemonPerPage;
    return parsedPokemon.slice(
      firstDisplayedPokemonIndex,
      lastDisplayedPokemonIndex,
    );
  }, [currentPage, parsedPokemon, pokemonPerPage]);
};

import { useMemo } from "react";
import { usePokemonToDisplay } from "../../utils/usePokemonToDisplay.ts";

export const useCurrentDisplayedPokemon = (
  currentPage: number,
  pokemonPerPage: number,
) => {
  const filteredPokemon = usePokemonToDisplay();

  return useMemo(() => {
    const firstDisplayedPokemonIndex = (currentPage - 1) * pokemonPerPage;
    const lastDisplayedPokemonIndex =
      firstDisplayedPokemonIndex + pokemonPerPage;
    return filteredPokemon.slice(
      firstDisplayedPokemonIndex,
      lastDisplayedPokemonIndex,
    );
  }, [currentPage, filteredPokemon, pokemonPerPage]);
};

import { useContext, useMemo } from "react";
import { FiltersContext } from "../contexts/FiltersContextProvider.tsx";
import { pokemonDetailsParsed } from "../models/pokemonInfo.ts";
import { InfoFromApiContext } from "../contexts/InfoFromApiContextProvider.tsx";

export const usePokemonToDisplay = () => {
  const { parsedPokemon } = useContext(InfoFromApiContext);
  const { search, isOnlyFavs } = useContext(FiltersContext);

  return useMemo(() => {
    return parsedPokemon.filter((pokemon: pokemonDetailsParsed) => {
      if (isOnlyFavs && !pokemon.isFav) {
        return false;
      }

      if (!search) {
        return true;
      }

      const searchId = Number(search);

      if (Number.isNaN(searchId)) {
        return pokemon.name.includes(search);
      }

      return pokemon.id.toString().includes(searchId.toString());
    });
  }, [search, isOnlyFavs, parsedPokemon]);
};

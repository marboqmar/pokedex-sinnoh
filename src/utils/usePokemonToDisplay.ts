import { useContext, useMemo } from "react";
import { FiltersContext } from "../contexts/FiltersContextProvider.tsx";
import { pokemonDetailsParsed } from "../models/pokemonInfo.ts";
import { InfoFromApiContext } from "../contexts/InfoFromApiContextProvider.tsx";
import { orderBy } from "lodash";

export const usePokemonToDisplay = () => {
  const { parsedPokemon } = useContext(InfoFromApiContext);
  const { search, isOnlyFavs } = useContext(FiltersContext);

  return useMemo(() => {
    const filteredPokemon = parsedPokemon.filter(
      (pokemon: pokemonDetailsParsed) => {
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
      },
    );

    if (!search) {
      return filteredPokemon;
    }

    if (Number(search)) {
      return orderBy(filteredPokemon, ["isFav", "id"], ["desc", "asc"]);
    }

    return orderBy(filteredPokemon, ["isFav", "name"], ["desc", "asc"]);
  }, [search, isOnlyFavs, parsedPokemon]);
};

import "./PokemonDisplay.scss";
import { PokemonCardGrid } from "../PokemonCards/PokemonCardGrid.tsx";
import { PokemonCardList } from "../PokemonCards/PokemonCardList.tsx";
import { ViewContext } from "../../contexts/ViewContextProvider.tsx";
import { ComponentType, ReactHTML, useContext, useState } from "react";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { useCurrentDisplayedPokemon } from "../CurrentDisplayedPokemon/CurrentDisplayedPokemon.tsx";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { usePokemonToDisplay } from "../../utils/usePokemonToDisplay.ts";
import { LOCAL_STORAGE_DARK_MODE_KEY } from "../../utils/themeChange.ts";
import { FiltersContext } from "../../contexts/FiltersContextProvider.tsx";

export const PokemonDisplay = () => {
  // view = grid or list
  const { view } = useContext(ViewContext);
  const { error, isLoading } = useContext(InfoFromApiContext);
  const filteredPokemon = usePokemonToDisplay();
  const { isOnlyFavs } = useContext(FiltersContext);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const length: number = filteredPokemon.length;
  const pokemonPerPage: number = 12;
  const currentPokemon: pokemonDetailsParsed[] = useCurrentDisplayedPokemon(
    currentPage,
    pokemonPerPage,
  );

  // View options
  const GridOrList: ComponentType<any> | keyof ReactHTML =
    view === "grid" ? PokemonCardGrid : PokemonCardList;

  // Dark mode
  localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, "light");

  return (
    <>
      <div>
        {error && !isLoading ? (
          <p>{error}</p>
        ) : isLoading ? (
          <p>Loading</p>
        ) : isOnlyFavs && filteredPokemon.length === 0 ? (
          <div className={"pokemon-display__no-fav-msg"}>
            <p>You don't have any favourite pokemon yet!</p>
            <p>Click on a pokemon's heart icon to set it as favourite</p>
          </div>
        ) : (
          <div className={`pokemon-display--${view}`}>
            {currentPokemon.map((pokemon) => (
              <GridOrList {...pokemon} key={`${pokemon.id}${pokemon.name}`} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        pokemonPerPage={pokemonPerPage}
        length={length}
        setNewCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

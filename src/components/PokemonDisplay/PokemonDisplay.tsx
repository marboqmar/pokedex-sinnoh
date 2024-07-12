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

export const PokemonDisplay = () => {
  const { view } = useContext(ViewContext);
  const { error, isLoading } = useContext(InfoFromApiContext);
  const filteredPokemon = usePokemonToDisplay();
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const length: number = filteredPokemon.length;
  const pokemonPerPage: number = 15;
  const currentPokemon: pokemonDetailsParsed[] = useCurrentDisplayedPokemon(
    currentPage,
    pokemonPerPage,
  );

  // View options
  const GridOrList: ComponentType<any> | keyof ReactHTML =
    view === "grid" ? PokemonCardGrid : PokemonCardList;

  // Dark mode

  return (
    <>
      <div>
        {error && !isLoading ? (
          <p>{error}</p>
        ) : isLoading ? (
          <p>Loading</p>
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

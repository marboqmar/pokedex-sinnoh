import "./PokemonDisplay.scss";
import { PokemonCardGrid } from "../PokemonCards/PokemonCardGrid.tsx";
import { PokemonCardList } from "../PokemonCards/PokemonCardList.tsx";
import { ViewContext } from "../../contexts/ViewContextProvider.tsx";
import { ComponentType, ReactHTML, useContext, useState } from "react";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { useCurrentDisplayedPokemon } from "../CurrentDisplayedPokemon/CurrentDisplayedPokemon.tsx";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";

export const PokemonDisplay = () => {
  const { view } = useContext(ViewContext);
  const { parsedPokemon, error, isLoading } = useContext(InfoFromApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  // Pagination
  const length: number = parsedPokemon.length;
  const pokemonPerPage: number = 15;
  const currentPokemon: pokemonDetailsParsed[] = useCurrentDisplayedPokemon(
    currentPage,
    pokemonPerPage,
  );

  const setNewCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  // View option
  const GridOrList: ComponentType<any> | keyof ReactHTML =
    view === "grid" ? PokemonCardGrid : PokemonCardList;

  return (
    <>
      <div className={"pokemon-display"}>
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
        setNewCurrentPage={setNewCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

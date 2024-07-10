import "./PokemonList.scss";
// import { pokemonTestInfo } from "../../utils/pokemonTestInfo.ts";
import { PokemonCardGrid } from "../PokemonCards/PokemonCardGrid.tsx";
import { PokemonCardList } from "../PokemonCards/PokemonCardList.tsx";
import { ViewContext } from "../../contexts/ViewContextProvider.tsx";
import { ComponentType, ReactHTML, useContext } from "react";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";

export const PokemonList = () => {
  const { view } = useContext(ViewContext);
  const { parsedPokemon, error, isLoading } = useContext(InfoFromApiContext);

  const GridOrList: ComponentType<any> | keyof ReactHTML =
    view === "grid" ? PokemonCardGrid : PokemonCardList;

  return (
    <div className={"pokemon-display"}>
      {error && !isLoading ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        <div className={`pokemon-display--${view}`}>
          {parsedPokemon.map((pokemon) => (
            <GridOrList {...pokemon} key={`${pokemon.id}${pokemon.name}`} />
          ))}
        </div>
      )}
    </div>
  );
};

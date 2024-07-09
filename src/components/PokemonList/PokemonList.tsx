import "./PokemonList.scss";
import { pokemonTestInfo } from "../../utils/pokemonTestInfo.ts";
import { PokemonCardGrid } from "../PokemonCards/PokemonCardGrid.tsx";
import { PokemonCardList } from "../PokemonCards/PokemonCardList.tsx";
import { ViewContext } from "../../contexts/ViewContextProvider.tsx";
import { useContext } from "react";

export const PokemonList = () => {
  const { view } = useContext(ViewContext);

  const Grid = () => {
    return (
      <>
        {pokemonTestInfo.map((pokemon) => (
          <PokemonCardGrid {...pokemon} key={`${pokemon.id}${pokemon.name}`} />
        ))}
      </>
    );
  };

  const List = () => {
    return (
      <>
        {pokemonTestInfo.map((pokemon) => (
          <PokemonCardList {...pokemon} key={`${pokemon.id}${pokemon.name}`} />
        ))}
      </>
    );
  };

  return (
    <div className={`pokemon-display--${view}`}>
      {view === "grid" ? <Grid /> : <List />}
    </div>
  );
};

// export const PokemonList = () => {
//   const { view } = useContext(ViewContext);
//
//   const GridOrList: ComponentType<any> | keyof ReactHTML =
//       view === "grid" ? "PokemonCardGrid" : "PokemonCardList";
//
//   return (
//       <div className={`pokemon-display--${view}`}>
//         {pokemonTestInfo.map((pokemon) => (
//             <GridOrList {...pokemon} key={`${pokemon.id}${pokemon.name}`} />
//         ))}
//       </div>
//   );
// };

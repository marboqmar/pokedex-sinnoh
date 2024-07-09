import "./PokemonList.scss";
import { pokemonTestInfo } from "../../utils/pokemonTestInfo.ts";
// import { PokemonCardGrid } from "../PokemonCards/PokemonCardGrid.tsx";
import { PokemonCardList } from "../PokemonCards/PokemonCardList.tsx";

export const PokemonList = () => {
  return (
    <div className={"pokemon-display--list"}>
      {pokemonTestInfo.map((pokemon) => (
        <PokemonCardList {...pokemon} />
      ))}
    </div>
  );
};

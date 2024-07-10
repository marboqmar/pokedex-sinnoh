import "./PokemonCardList.scss";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";

export const PokemonCardList = (pokemonInfo: pokemonDetailsParsed) => {
  return (
    <div className="flex-row gap-32 align-center pokemon-card--list">
      <i className="fa-regular fa-heart pokemon-card--list__heart"></i>
      <img
        src={pokemonInfo.imgs.default}
        alt="Image depicting selected pokemon"
      />
      <div className={"flex-row gap-48"}>
        <p className={"pokemon-card--list__id"}>#{pokemonInfo.id}</p>
        <p className={"pokemon-card--list__name"}>
          {capitalizeFirstLetter(pokemonInfo.name)}
        </p>
        <div
          className={"flex-row gap-12 justify-center pokemon-card--list__types"}
        >
          {pokemonInfo.types.map((type) => (
            <div className={`type-styling type--${type}`} key={type}>
              {type.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <img
        className={"pokemon-card--list__pokeball"}
        src={"/pokeball.png"}
        alt="Pokeball icon"
      />
    </div>
  );
};

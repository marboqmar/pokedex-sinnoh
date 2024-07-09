import "./PokemonCardList.scss";
import { pokemonInfoParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";

export const PokemonCardList = (pokemonInfo: pokemonInfoParsed) => {
  return (
    <div className="flex-row gap-32 align-center pokemon-card--list">
      <i className="fa-regular fa-heart pokemon-card--list__heart"></i>
      <img src={pokemonInfo.img} alt="Image depicting the selected pokemon" />
      <div className={"flex-row gap-48"}>
        <p>#{pokemonInfo.id}</p>
        <p>{capitalizeFirstLetter(pokemonInfo.name)}</p>
        <div
          className={"flex-row gap-12 justify-center pokemon-card--list__types"}
        >
          {pokemonInfo.types.map((type) => (
            <div className={`type-styling type--${type}`}>
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

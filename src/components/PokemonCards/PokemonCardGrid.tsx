import "./PokemonCardGrid.scss";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.tsx";
import { FavButton } from "./FavButton.tsx";

export const PokemonCardGrid = (pokemonInfo: pokemonDetailsParsed) => {
  return (
    <Button
      className={"flex-column align-center pokemon-card--grid"}
      component={Link}
      isLink
      to={`pokemon-details/${pokemonInfo.name}`}
    >
      <div className="flex-row space-between pokemon-card--grid__imgs">
        <img
          className={"pokemon-card__pokeball pokemon-card--grid__pokeball"}
          src={"/pokeball.png"}
          alt="Pokeball icon"
        />
        <img
          src={pokemonInfo.imgs.default}
          alt="Image depicting selected pokemon"
        />
        <FavButton pokemonInfo={pokemonInfo} />
      </div>
      <div className={"flex-column align-center gap-12"}>
        <p>#{pokemonInfo.id}</p>
        <p>{capitalizeFirstLetter(pokemonInfo.name)}</p>
        <div className="flex-row gap-12">
          {pokemonInfo.types.map((type) => (
            <div className={`type-styling type--${type}`} key={type}>
              {type.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </Button>
  );
};

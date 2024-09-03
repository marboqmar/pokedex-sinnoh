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
      <div className="flex-row space-between pokemon-card--grid__pokeball-and-fav">
        <img
          className={"pokemon-card--grid__pokeball"}
          src={"/pokeball.png"}
          alt="Pokeball icon"
        />
        <FavButton pokemonInfo={pokemonInfo} />
      </div>
      <div className={"flex-row gap-48"}>
        <div className={"flex-column gap-12 margin-top-12"}>
          <p>#{pokemonInfo.id}</p>
          <p>{capitalizeFirstLetter(pokemonInfo.name)}</p>
          {pokemonInfo.types.map((type) => (
            <div className={`type-styling type--${type}`} key={type}>
              {type.toUpperCase()}
            </div>
          ))}
        </div>
        <img
          className={"pokemon-card--grid__pokemon-img"}
          src={pokemonInfo.imgs.default}
          alt="Image depicting selected pokemon"
        />
      </div>
    </Button>
  );
};

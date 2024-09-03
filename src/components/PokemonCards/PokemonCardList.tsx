import "./PokemonCardList.scss";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button.tsx";
import { FavButton } from "./FavButton.tsx";
import { useContext, useEffect, useState } from "react";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";

export const PokemonCardList = (pokemonInfo: pokemonDetailsParsed) => {
  const [areTypesShown, setAreTypeShown] = useState<boolean>(true);
  const { windowWidth } = useContext(WindowWidthContext);

  useEffect(() => {
    if (windowWidth < 870) {
      setAreTypeShown(false);
    } else {
      setAreTypeShown(true);
    }
  }, [windowWidth]);

  return (
    <Button
      className={"flex-row gap-32 align-center pokemon-card--list"}
      component={Link}
      isLink
      to={`pokemon-details/${pokemonInfo.name}`}
    >
      <FavButton pokemonInfo={pokemonInfo} />
      <img
        className={"pokemon-card--list__pokemon-img"}
        src={pokemonInfo.imgs.default}
        alt="Image depicting selected pokemon"
      />
      <div className={"flex-row gap-48"}>
        <p className={"pokemon-card--list__id"}>#{pokemonInfo.id}</p>
        <p className={"pokemon-card--list__name"}>
          {capitalizeFirstLetter(pokemonInfo.name)}
        </p>
        {!areTypesShown ? (
          ""
        ) : (
          <div
            className={
              "flex-row gap-12 justify-center pokemon-card--list__types"
            }
          >
            {pokemonInfo.types.map((type) => (
              <div className={`type-styling type--${type}`} key={type}>
                {type.toUpperCase()}
              </div>
            ))}
          </div>
        )}
      </div>
      <img
        className={"pokemon-card--list__pokeball"}
        src={"/pokeball.png"}
        alt="Pokeball icon"
      />
    </Button>
  );
};

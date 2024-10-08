import "./PokemonDetails.scss";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonDetailsCard } from "../PokemonCards/PokemonDetailsCard.tsx";
import { Button } from "../Button/Button.tsx";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";

export const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const { parsedPokemon } = useContext(InfoFromApiContext);
  const { windowWidth } = useContext(WindowWidthContext);

  const selectedPokemon: pokemonDetailsParsed | undefined = parsedPokemon.find(
    (pokemon) => pokemon.name === pokemonName,
  );

  return (
    <>
      {!selectedPokemon ? (
        <p className={"pokemon-details__pokemon-not-found-msg"}>
          Pokemon not found
        </p>
      ) : (
        <div
          className={"flex justify-center gap-48 margin-top-60 pokemon-details"}
        >
          <Button
            className={
              "flex justify-center align-center header__btn pokemon-details__card__back-button"
            }
            component={Link}
            isLink
            to={"/"}
          >
            <i className="fa-solid fa-arrow-left header__icon"></i>
          </Button>
          <div className={"flex justify-center"}>
            <PokemonDetailsCard {...selectedPokemon} />
          </div>
          {windowWidth > 420 ? <div className={"header__btn"}></div> : <></>}
        </div>
      )}
    </>
  );
};

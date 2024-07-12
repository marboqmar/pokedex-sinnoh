import "./PokemonDetails.scss";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonDetailsCard } from "../PokemonCards/PokemonDetailsCard.tsx";
import { Button } from "../Button/Button.tsx";

export const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const { parsedPokemon } = useContext(InfoFromApiContext);

  const selectedPokemon: pokemonDetailsParsed | undefined = parsedPokemon.find(
    (pokemon) => pokemon.name === pokemonName,
  );

  return (
    <>
      {!selectedPokemon ? (
        <p>Pokemon not found</p>
      ) : (
        <div
          className={"flex justify-center gap-48 margin-top-60 pokemon-details"}
        >
          <Button
            className={
              "flex justify-center align-center header__btn pokemon-details__back-button"
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
          <div className={"header__btn"}></div>
        </div>
      )}
    </>
  );
};

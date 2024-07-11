import { useContext } from "react";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";

export const FavButton = ({
  pokemonInfo,
}: {
  pokemonInfo: pokemonDetailsParsed;
}) => {
  const { parsedPokemon, setNewParsedPokemon } = useContext(InfoFromApiContext);

  const handleFavClick = (pokemonId: number) => {
    const newParsedPokemon = parsedPokemon.map(
      (pokemon: pokemonDetailsParsed) => {
        if (pokemonId === pokemon.id) {
          const newPokemonInfo = { ...pokemonInfo };
          newPokemonInfo.isFav = !pokemon.isFav;
          return newPokemonInfo;
        }

        return pokemon;
      },
    );

    setNewParsedPokemon(newParsedPokemon);
  };

  return (
    <i
      className={`fa-heart pokemon-card__heart pokemon-card--grid__heart ${pokemonInfo.isFav ? "fa-solid pokemon-card--grid__heart--fav" : "fa-regular"}`}
      onClick={(event) => {
        event.preventDefault();
        handleFavClick(pokemonInfo.id);
      }}
    ></i>
  );
};

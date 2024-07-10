import "./PokemonDetails.scss";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";
import { InfoFromApiContext } from "../../contexts/InfoFromApiContextProvider.tsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const PokemonDetailsCard = (pokemon: pokemonDetailsParsed) => {
  const {
    imgs,
    id,
    name,
    types,
    description,
    weight,
    height,
    baseExperience,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  } = pokemon;

  return (
    <div className={"flex-column  align-center pokemon-details"}>
      <div>
        <img src={imgs.default} alt="Image depicting selected pokemon" />
        <img
          src={imgs?.defaultBack}
          alt="Image depicting selected pokemon from its back"
        />
        <img
          src={imgs?.shiny}
          alt="Image depicting selected pokemon on its shiny version"
        />
        <img
          src={imgs?.shinyBack}
          alt="Image depicting selected pokemon on its shiny version from its back"
        />
      </div>
      <div className={"flex-column align-center gap-32"}>
        <div className={"flex-column align-center gap-12"}>
          <p>#{id}</p>
          <p>{capitalizeFirstLetter(name)}</p>
          <div className="flex-row gap-12">
            {types.map((type) => (
              <div className={`type-styling type--${type}`} key={type}>
                {type.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        <p>{description}</p>
        <div className="flex-column gap-12">
          <p>Weight: {weight}kg</p>
          <p>Height: {height}cm</p>
          <p>Base experience: {baseExperience}</p>
        </div>
        <div className="flex-column gap-12">
          <p>Stats:</p>
          <p>HP: {hp}</p>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <p>Special attack: {specialAttack}</p>
          <p>Special defense: {specialDefense}</p>
          <p>Speed: {speed}</p>
        </div>
        <p>Evolution chart</p>
      </div>
    </div>
  );
};

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
        <div className={"flex justify-center margin-top-60"}>
          <PokemonDetailsCard {...selectedPokemon} />
        </div>
      )}
    </>
  );
};

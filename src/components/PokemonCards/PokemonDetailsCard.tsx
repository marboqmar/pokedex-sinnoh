import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";
import { PokemonDetailsImages } from "../PokemonDetails/PokemonDetailsImages.tsx";

export const PokemonDetailsCard = (pokemon: pokemonDetailsParsed) => {
  const {
    id,
    name,
    types,
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
    <div className={"flex-column  align-center pokemon-details__card"}>
      <div className={"flex-column align-center gap-32"}>
        <div className={"flex-column align-center gap-12"}>
          <PokemonDetailsImages pokemon={pokemon} />
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
      </div>
    </div>
  );
};

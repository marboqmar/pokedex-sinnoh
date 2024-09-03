import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";
import { PokemonRadarChart } from "../PokemonDetails/PokemonRadarChart.tsx";
import { useContext } from "react";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";

export const PokemonDetailsCard = (pokemon: pokemonDetailsParsed) => {
  const { windowWidth } = useContext(WindowWidthContext);
  const {
    id,
    name,
    types,
    weight,
    height,
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
          <div className={"flex-row gap-12"}>
            <img
              className={"pokemon-details__imgs"}
              src={pokemon.imgs.default}
              alt="Image depicting selected pokemon"
            />
            <img
              className={"pokemon-details__imgs"}
              src={pokemon.imgs.shiny}
              alt="Image depicting selected pokemon on its shiny version"
            />
          </div>
          <p>#{id}</p>
          <p>{capitalizeFirstLetter(name)}</p>
          <div className="flex-row gap-12 margin-top-12">
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
        </div>
        {windowWidth > 744 ? (
          <PokemonRadarChart
            hp={hp}
            attack={attack}
            defense={defense}
            specialAttack={specialAttack}
            specialDefense={specialDefense}
            speed={speed}
          />
        ) : (
          <div className="flex-column gap-12 margin-bottom-24">
            <div className={"pokemon-details__stats-title"}>
              <div className={"pokemon-details__stats-title--line"}></div>
              <p>Stats</p>
              <div className={"pokemon-details__stats-title--line"}></div>
            </div>
            <div className={"flex-row gap-32"}>
              <div className="flex-column gap-12">
                <p>HP:</p>
                <p>Attack:</p>
                <p>Defense:</p>
                <p>Special attack:</p>
                <p>Special defense:</p>
                <p>Speed:</p>
              </div>
              <div className="flex-column gap-12">
                <p>{hp}</p>
                <p>{attack}</p>
                <p>{defense}</p>
                <p>{specialAttack}</p>
                <p>{specialDefense}</p>
                <p>{speed}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

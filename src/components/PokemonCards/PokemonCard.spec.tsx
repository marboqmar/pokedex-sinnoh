import {
  generateRandomBoolean,
  generateRandomNumber,
  generateRandomString,
} from "../../tests/utils/randomDataGenerator.ts";
import { PokemonCardGrid } from "./PokemonCardGrid.tsx";
import { screen } from "@testing-library/react";
import { renderComponent } from "../../tests/utils/componentRenderer.tsx";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";
import { capitalizeFirstLetter } from "../../utils/utils.ts";
import { PokemonCardList } from "./PokemonCardList.tsx";
import { PokemonDetailsCard } from "./PokemonDetailsCard.tsx";

const randomPokemon: pokemonDetailsParsed = {
  imgs: {
    default: generateRandomString(),
    shiny: generateRandomString(),
  },
  id: generateRandomNumber(),
  name: capitalizeFirstLetter(generateRandomString()),
  types: [generateRandomString(), generateRandomString()],
  weight: generateRandomNumber(),
  height: generateRandomNumber(),
  hp: generateRandomNumber(),
  attack: generateRandomNumber(),
  defense: generateRandomNumber(),
  specialAttack: generateRandomNumber(),
  specialDefense: generateRandomNumber(),
  speed: generateRandomNumber(),
  isFav: generateRandomBoolean(),
};

describe("PokemonCard", () => {
  it("Should render a pokemon with random data in a grid pokemon card", () => {
    renderComponent(<PokemonCardGrid {...randomPokemon} />);

    const nameElement = screen.getByText(randomPokemon.name);

    expect(nameElement).toBeInTheDocument();
  });

  it("Should render a pokemon with random data in a list pokemon card", () => {
    renderComponent(<PokemonCardList {...randomPokemon} />);

    const nameElement = screen.getByText(randomPokemon.name);

    expect(nameElement).toBeInTheDocument();
  });

  it("Should render a pokemon with random data in a pokemon details card", () => {
    renderComponent(<PokemonDetailsCard {...randomPokemon} />);

    const nameElement = screen.getByText(randomPokemon.name);

    expect(nameElement).toBeInTheDocument();
  });
});

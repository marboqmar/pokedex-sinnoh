import { pokemonDetailsParsed } from "../models/pokemonInfo.ts";

export const pokemonDetailsTestInfo: pokemonDetailsParsed = {
  imgs: {
    regular:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    regularBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    shinyBack:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
  },
  id: 1,
  name: "bulbasaur",
  types: ["grass", "poison"],
  description: "Bulbasaur is so cute!",
  weight: 7,
  height: 70,
  baseExperience: 80,
  hp: 81,
  attack: 82,
  defense: 83,
  specialAttack: 84,
  specialDefense: 85,
  speed: 86,
};

import {
  pokemonDetailsFromApi,
  pokemonDetailsParsed,
} from "../models/pokemonInfo.ts";

export const mapPokemonApiToPokemonDetails = (
  pokemonInfoFromApi: pokemonDetailsFromApi[],
): pokemonDetailsParsed[] => {
  return pokemonInfoFromApi.map((pokemon) => {
    const { sprites, id, name, types, weight, height, base_experience, stats } =
      pokemon;
    const pokemonTypes: string[] = [];

    types.forEach((type) => {
      pokemonTypes.push(type.type.name);
    });

    return {
      imgs: {
        default: sprites.other["official-artwork"].front_default,
        shiny: sprites.other["official-artwork"].front_shiny,
      },
      id: id,
      name: name,
      types: pokemonTypes,
      weight: weight / 10,
      height: height * 10,
      baseExperience: base_experience,
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      specialAttack: stats[3].base_stat,
      specialDefense: stats[4].base_stat,
      speed: stats[5].base_stat,
      isFav: false,
    };
  });
};

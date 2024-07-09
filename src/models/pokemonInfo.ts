export interface pokemonInfoParsed {
  img: string;
  id: number;
  name: string;
  types: string[];
}

export interface pokemonDetailsParsed {
  imgs: {
    regular: string;
    regularBack: string;
    shiny: string;
    shinyBack: string;
  };
  id: number;
  name: string;
  types: string[];
  description: string;
  weight: number;
  height: number;
  baseExperience: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

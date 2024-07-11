export interface pokemonDetailsParsed {
  imgs: {
    default: string;
    defaultBack: string;
    shiny: string;
    shinyBack: string;
  };
  id: number;
  name: string;
  types: string[];
  description?: string;
  weight: number;
  height: number;
  baseExperience: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  isFav: boolean;
}

export interface pokemonDetailsFromApi {
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  base_experience: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

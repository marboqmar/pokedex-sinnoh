export interface pokemonDetailsParsed {
  imgs: {
    default: string;
    shiny: string;
  };
  id: number;
  name: string;
  types: string[];
  weight: number;
  height: number;
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
    other: {
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
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
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

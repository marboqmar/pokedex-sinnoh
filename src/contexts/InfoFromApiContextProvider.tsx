import { createContext, ReactNode, useEffect, useState } from "react";
import {
  pokemonDetailsFromApi,
  pokemonDetailsParsed,
} from "../models/pokemonInfo.ts";
import axios from "axios";
import { mapPokemonApiToPokemonDetails } from "../utils/mapPokemonApiToPokemonDetails.ts";

interface InfoFromApiContextModel {
  pokemonFromApi: pokemonDetailsFromApi[];
  parsedPokemon: pokemonDetailsParsed[];
  setNewParsedPokemon: (parsedPokemon: pokemonDetailsParsed[]) => void;
  isLoading: boolean;
  setNewIsLoading: (isLoading: boolean) => void;
  error: string;
  setNewError: (error: string) => void;
}

const contextDefault: InfoFromApiContextModel = {
  pokemonFromApi: [],
  parsedPokemon: [],
  setNewParsedPokemon: () => {
    return;
  },
  isLoading: false,
  setNewIsLoading: () => {
    return;
  },
  error: "",
  setNewError: () => {
    return;
  },
};

export const InfoFromApiContext =
  createContext<InfoFromApiContextModel>(contextDefault);

interface InfoFromApiContextProviderProps {
  children: ReactNode;
}

export const InfoFromApiContextProvider = ({
  children,
}: InfoFromApiContextProviderProps): JSX.Element => {
  const pokemonFromApi: pokemonDetailsFromApi[] = [];
  const [parsedPokemon, setParsedPokemon] = useState<pokemonDetailsParsed[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const contextValue = {
    pokemonFromApi,
    parsedPokemon,
    setNewParsedPokemon: setParsedPokemon,
    isLoading,
    setNewIsLoading: setIsLoading,
    error,
    setNewError: setError,
  };

  const urls: string[] = [];

  // The pokemon we need are from 387 to 493
  for (let i = 387; i < 494; i++) {
    urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  }

  // Fetch pokemon from API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setError("");
        setIsLoading(true);
        const requests = urls.map((url) => axios.get(url));
        axios.all(requests).then((responses) => {
          responses.forEach((response) => {
            pokemonFromApi.push(response.data);
            setParsedPokemon(mapPokemonApiToPokemonDetails(pokemonFromApi));
          });
        });
      } catch (error) {
        setError("API did not provide any results");
      }
      setIsLoading(false);
    };
    fetchPokemon();
    // eslint-disable-next-line
  }, []);

  return (
    <InfoFromApiContext.Provider value={contextValue}>
      {children}
    </InfoFromApiContext.Provider>
  );
};

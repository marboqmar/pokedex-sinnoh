import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { PokemonList } from "./components/PokemonList/PokemonList.tsx";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PokemonList />,
      },
      {
        path: "/pokemon-details/:pokemonId",
        element: <PokemonDetails />,
      },
    ],
  },
]);

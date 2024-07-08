import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { PokemonList } from "./PokemonList/PokemonList.tsx";
import { PokemonDetails } from "./PokemonDetails/PokemonDetails.tsx";

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
        path: "/pokemonDetails",
        element: <PokemonDetails />,
      },
    ],
  },
]);

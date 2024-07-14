import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { PokemonDisplay } from "./components/PokemonDisplay/PokemonDisplay.tsx";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PokemonDisplay />,
      },
      {
        path: "/pokemon-details/:pokemonName",
        element: <PokemonDetails />,
      },
    ],
  },
]);

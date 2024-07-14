import { useContext } from "react";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";
import { pokemonDetailsParsed } from "../../models/pokemonInfo.ts";

export const PokemonDetailsImages = ({
  pokemon,
}: {
  pokemon: pokemonDetailsParsed;
}) => {
  const { imgs } = pokemon;
  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <>
      {windowWidth > 744 ? (
        <div>
          <img src={imgs.default} alt="Image depicting selected pokemon" />
          <img
            src={imgs?.defaultBack}
            alt="Image depicting selected pokemon from its back"
          />
          <img
            src={imgs?.shiny}
            alt="Image depicting selected pokemon on its shiny version"
          />
          <img
            src={imgs?.shinyBack}
            alt="Image depicting selected pokemon on its shiny version from its back"
          />
        </div>
      ) : (
        <>
          <div>
            <img src={imgs.default} alt="Image depicting selected pokemon" />
            <img
              src={imgs?.defaultBack}
              alt="Image depicting selected pokemon from its back"
            />
          </div>
          <div>
            <img
              src={imgs?.shiny}
              alt="Image depicting selected pokemon on its shiny version"
            />
            <img
              src={imgs?.shinyBack}
              alt="Image depicting selected pokemon on its shiny version from its back"
            />
          </div>
        </>
      )}
    </>
  );
};

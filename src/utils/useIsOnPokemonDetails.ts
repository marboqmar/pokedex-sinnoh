import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useIsOnPokemonDetails = () => {
  const [isOnPokemonDetails, setIsOnPokemonDetails] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("pokemon-details")
      ? setIsOnPokemonDetails(true)
      : setIsOnPokemonDetails(false);
  }, [location]);

  return isOnPokemonDetails;
};

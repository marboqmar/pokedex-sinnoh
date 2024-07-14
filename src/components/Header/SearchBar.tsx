import { ChangeEvent, FormEvent, useContext } from "react";
import { FiltersContext } from "../../contexts/FiltersContextProvider.tsx";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const { setNewSearch } = useContext(FiltersContext);
  const navigate = useNavigate();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(event.target.value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <form className={"margin-ver-auto"} onSubmit={handleOnSubmit}>
      <input
        className={"font header__search-bar"}
        type={"text"}
        onChange={handleSearchInputChange}
        placeholder={"Search by name or number"}
      />
    </form>
  );
};

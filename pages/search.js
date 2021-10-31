import { useRouter } from "next/router";
import { pokemonNames } from "../shared/pokemonNames";

function Search() {
  const router = useRouter();
  const searchString = router.query.pokemon;
  const matchArr = pokemonNames.filter((item) =>
    item.name.includes(searchString)
  );

  const handleClick = (e) => {
    const clickedPokemon = e.currentTarget.dataset.pokemon;
    alert(clickedPokemon);
  };

  if (matchArr < 1) {
    return <h1>no results</h1>;
  }

  return (
    <div>
      {matchArr.map((item) => {
        return (
          <h5 data-pokemon={item.name} onClick={handleClick}>
            {item.name}
          </h5>
        );
      })}
    </div>
  );
}

export default Search;

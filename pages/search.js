import { useRouter } from "next/router";
import Link from "next/link";
import { pokemonNames } from "../shared/pokemonNames";

function Search() {
  const router = useRouter();
  const searchString = router.query.pokemon;
  const matchArr = pokemonNames.filter((item) =>
    item.name.includes(searchString)
  );

  if (matchArr < 1) {
    return <h1>no results</h1>;
  }

  return (
    <div>
      {matchArr.map((item, index) => {
        return (
          <Link href={`/pokemon?name=${item.name}`}>
            <a>
              <h5>{item.name}</h5>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default Search;

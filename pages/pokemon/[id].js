import { useRouter } from "next/router";
import useFetch from "../../shared/useFetch";

function Pokemon() {
  const router = useRouter();
  let url = router.query.id
    ? `https://pokeapi.co/api/v2/pokemon/${router.query.id}`
    : null;

  const { isLoading, data } = useFetch(url);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  return (
    <div>
      <h1>Pokemon {data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}

export default Pokemon;
